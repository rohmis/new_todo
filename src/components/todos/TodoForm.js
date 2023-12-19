import React, { useState, useEffect } from "react";
import Headers from "../ui/Headers";
import Button from "../ui/Button";

const TodoForm = ({ onAdd, editData }) => {
  const initialFields = {
    title: "",
    description: "",
    status: "pending",
  };

  const [todoFields, setTodoFields] = useState(initialFields);

  // useEffect(() => {
  //   if (editData) {
  //     // If there's data for editing, populate the fields with the editData
  //     setTodoFields(editData);
  //   } else {
  //     // If there's no data for editing, reset the fields to initial values
  //     setTodoFields(initialFields);
  //   }
  // }, [editData, initialFields]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editData) {
      // Handle update logic here
      onAdd(todoFields); // Assuming onAdd is a function to update a todo
    } else {
      // Handle add logic here
      onAdd({ ...todoFields, id: Math.floor(Math.random() * 1000) }); // Assuming onAdd is a function to add a new todo
    }

    // Resetting form fields after submission
    setTodoFields(initialFields);
  };

  const handleFieldChange = (e) => {
    const { id, value } = e.target;
    setTodoFields({ ...todoFields, [id]: value });
  };

  return (
    <div className="container">
      <div className="mt-4">
        <Headers text={editData ? "Edit Todo" : "Add Todo"} />
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
              value={todoFields.title}
              onChange={handleFieldChange}
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
              value={todoFields.description}
              onChange={handleFieldChange}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="status" className="form-label">
              Status:
            </label>
            <select
              className="form-select"
              id="status"
              value={todoFields.status}
              onChange={handleFieldChange}
            >
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <Button
            text={editData ? "Update" : "Add"}
            className={"btn btn-dark"}
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
