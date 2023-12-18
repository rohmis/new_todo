import React from "react";

const Table = (props) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <td>Id</td>
          <td>Title</td>
          <td>Status</td>
        </tr>
      </thead>
      <tbody>
        {props.list.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>status</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
