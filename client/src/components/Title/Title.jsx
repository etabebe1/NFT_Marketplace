import React from "react";

// INTERNAL IMPORT
import "./Title.css";

function Title({ heading, paragraph }) {
  return (
    <div className="main-container">
      <div className="title-container">
        <h1>{heading}</h1>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}

export default Title;
