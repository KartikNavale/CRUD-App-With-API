import axios from "axios";

const api = axios.create({
  baseURL: "https:jsonplaceholder.typicode.com",
});

// get method
export const getPost = () => {
  return api.get("/posts");
};
// Delete method
export const deletePost = (id) => {
    return api.delete(`/posts/${id}`);
}

// Post method
export const postData = (post) => {
  return api.post("/Posts", post);
}
 
// Put method
export const updateData = (id, post) => {
return api.put(`/posts/${id}`, post);
}