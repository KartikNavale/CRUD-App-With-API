import { Modal } from "react-bootstrap";
import "../App.css";

const EditPostModal = ({ show, handleClose, updateDataApi, setUpdateDataApi, onSave }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title className="fw-bold">Edit Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mb-3">
          <label htmlFor="title" className="form-label modal-head">
            Title
          </label>
          <input
            type="text"
            className="form-control text-modal"
            id="title"
            name="title"
            value={updateDataApi.title || ""}
            onChange={(e) =>
              setUpdateDataApi({ ...updateDataApi, title: e.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label modal-head">
            Body
          </label>
          <textarea
            className="form-control fs-4 text-modal"
            id="body"
            name="body"
            value={updateDataApi.body || ""}
            onChange={(e) =>
              setUpdateDataApi({ ...updateDataApi, body: e.target.value })
            }
            rows="3"
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="close-btn" onClick={handleClose}>
          Close
        </button>
        <button className="edit-btn" onClick={onSave}>
          Edit
        </button> {/* Edit button */}
      </Modal.Footer>
    </Modal>
  );
};

export default EditPostModal;
