import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className={props.className}>{props.value}</button>
    </div>
  );
};

export default Button;
