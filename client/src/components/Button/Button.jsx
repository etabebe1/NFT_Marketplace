import React from "react";
import "./Button.css";

function Button({ btnName, handelClick, icon, btnComponent }) {
  return (
    <div className={`btn ${btnComponent}`} onClick={handelClick}>
      <span>{icon}</span>
      <span>{btnName}</span>
    </div>
  );
}

export default Button;
