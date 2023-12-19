// import React, { useState } from "react";
// import Headers from "../ui/Headers";
// import Table from "../ui/Table";
// import TodoForm from "./TodoForm";

// const TodoList = (props) => {
//   const [todos, setTodos] = useState(props.todoData);
//   const [editItem, setEditItem] = useState(null);

//   const deleteTodo = (id) => {
//     const updatedTodos = todos.filter((todo) => todo.id !== id);
//     setTodos(updatedTodos);
//   };

//   const editTodo = (item) => {
//     setEditItem(item);
   
//   };

//   const addTodo = (newTodo) => {
//     if (editItem) {
//       const updatedTodos = todos.map((todo) =>
//         todo.id === editItem.id ? newTodo : todo
//       );
      
//       setTodos(updatedTodos);
//       setEditItem(null);
//     } else {
//       const todoWithId = { ...newTodo, id: Math.floor(Math.random() * 1000) };
//       const updatedTodos = [...todos, todoWithId];
//       setTodos(updatedTodos);
//     }
//   };

//   return (
//     <div className="mt-5 container">
//       <div>
//         <TodoForm onAdd={addTodo} editData={editItem} />
//       </div>
//       <div>
//         <Headers text={"Todo list"} />
//       </div>
//       <div className="mt-4">
//         <Table list={todos} onDelete={deleteTodo} onEdit={editTodo} />
//       </div>
//     </div>
//   );
// };

// export default TodoList;



import React, { useState } from "react";
import Headers from "../ui/Headers";
import Table from "../ui/Table";
import TodoForm from "./TodoForm";

const TodoList = (props) => {
  const [todos, setTodos] = useState(props.todoData);
  const [editItem, setEditItem] = useState(null);

  const deleteTodo = (idToDelete) => {
    const updatedTodos = todos.filter((todo) => todo.id !== idToDelete);
    setTodos(updatedTodos);
  };

  const editTodo = (itemToEdit) => {
    setEditItem(itemToEdit);
  };

  const addTodo = (newTodo) => {
    if (editItem) {
      updateTodo(newTodo);
    } else {
      addNewTodo(newTodo);
    }
  };

  const addNewTodo = (newTodo) => {
    const todoWithId = { ...newTodo, id: Math.floor(Math.random() * 1000) };
    const updatedTodos = [...todos, todoWithId];
    setTodos(updatedTodos);
  };

  const updateTodo = (updatedTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === editItem.id ? updatedTodo : todo
    );
    setTodos(updatedTodos);
    setEditItem(null);
  };

  return (
    <div className="mt-5 container">
      <div>
        <TodoForm onAdd={addTodo} editData={editItem} />
      </div>
      <div>
        <Headers text={"Todo list"} />
      </div>
      <div className="mt-4">
        <Table list={todos} onDelete={deleteTodo} onEdit={editTodo} />
      </div>
    </div>
  );
};

export default TodoList;
