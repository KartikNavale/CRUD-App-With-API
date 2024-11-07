 // Posts.js
import { useEffect, useState } from "react";
import { getPost, deletePost } from "../api/PostApi";
import "../App.css";
import Form from "./Form";
import EditPostModal from "./EditPostModal";  

export const Posts = () => {
  const [data, setData] = useState([]);
  const [updateDataApi, setUpdateDataApi] = useState({});
  const [showModal, setShowModal] = useState(false);

  const getPostData = async () => {
    const res = await getPost();
    setData(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  // Delete function
  const handleDeletePost = async (id) => {
    try {
      const res = await deletePost(id);
      if (res.status === 200) {
        const newUpdatedPosts = data.filter((curPost) => curPost.id !== id);
        setData(newUpdatedPosts);
      } else {
        console.log("Failed to delete:", res.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Open modal and set data for editing
  const handleUpdatePost = (curElem) => {
    setUpdateDataApi(curElem);
    setShowModal(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setShowModal(false);
    setUpdateDataApi({});
  };

  // Save updated data
  const handleSaveChanges = () => {
    const updatedPosts = data.map((post) =>
      post.id === updateDataApi.id ? updateDataApi : post
    );
    setData(updatedPosts); // Update the main data list
    setShowModal(false); // Close the modal
  };

  return (
    <>
      <div className="section-form">
        <Form
          data={data}
          setData={setData}
          updateDataApi={updateDataApi}
          setUpdateDataApi={setUpdateDataApi}
        />
      </div>
      <section className="section-post">
        <ol>
          {data.map((curElem) => {
            const { id, body, title } = curElem;
            return (
              <li className="ol-list" key={id}>
                <p>Title: {title}</p>
                <p>Body: {body}</p>
                <button onClick={() => handleUpdatePost(curElem)}>Edit</button>
                <button
                  className="btn-delete"
                  onClick={() => handleDeletePost(id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ol>
      </section>

      {/* Bootstrap Modal for Editing */}
      <EditPostModal
        show={showModal}
        handleClose={handleCloseModal}
        updateDataApi={updateDataApi}
        setUpdateDataApi={setUpdateDataApi}
        onSave={handleSaveChanges} // Pass onSave function
      />
    </>
  );
};

export default Posts;
