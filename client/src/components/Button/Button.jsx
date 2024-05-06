import React from "react";
import styles from "./Button.css";

function Button({ btnName, handelClick }) {
  return (
    <div>
      <div className="btn" onClick={() => handelClick}>
        {btnName}
      </div>
    </div>
  );
}

export default Button;
