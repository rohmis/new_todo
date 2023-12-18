import React from "react";
import Headers from "../ui/Headers";
import Table from "../ui/Table";

const TodoList = (props) => {
  return (
    <div className="mt-5 container">
      <div>
        <Headers text={"Todo list"} />
      </div>
      <div className="mt-4">
        <Table list={props.todoData} />
      </div>
    </div>
  );
};

export default TodoList;
