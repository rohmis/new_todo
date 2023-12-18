import React from "react";
import Headers from "../ui/Headers";
import Button from "../ui/Button";

const TodoForm = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="mt-4">
        <Headers text={"Add Todo"} />
      </div>
      <div className="mt-4">
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title:
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter title.."
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description:
            </label>
            <textarea
              rows={3}
              className="form-control"
              id="description"
              placeholder="Enter description.."
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="status" className="form-label">
              Status:
            </label>
            <select className="form-select" id="status">
              <option>pending</option>
              <option>completed</option>
            </select>
          </div>

          <Button value={"Add"} className={"btn btn-dark"} />
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
