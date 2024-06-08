import React from "react";
import "./Button.css";

function Button({ btnName, handelClick, icon }) {
  return (
    <div className="btn" onClick={handelClick}>
      <span>{icon}</span>
      <span>{btnName}</span>
    </div>
  );
}

export default Button;
