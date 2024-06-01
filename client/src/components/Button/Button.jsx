import React from "react";
import "./Button.css";

function Button({ btnName, handelClick }) {
  return (
    <div className="btn" onClick={handelClick}>
      {btnName}
    </div>
  );
}

export default Button;
