import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const index = () => {
  const todoData = [
    { id: 1, title: "product1" },
    { id: 2, title: "product2" },
    { id: 3, title: "product3" },
  ];

  return (
    <>
      <TodoForm />
      <TodoList todoData={todoData} />
    </>
  );
};

export default index;
