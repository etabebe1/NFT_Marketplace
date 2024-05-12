import React from "react";

// INTERNAL IMPORT
import "./Subscribe.css";
import images from "../../assets/img/z-index.img";
import { Button } from "../z-index.component";

function Subscribe() {
  return (
    <div className="subscribe-section">
      <div className="subscribe-content">
        <h1>Never miss a drop</h1>
        <p>
          Subscribe to our super-exclusive drop list and be the first to know
          about upcoming drops
        </p>
        <div className="subscribe-features">
          <h4 className="with-bg">01</h4>
          <h4>Get more discount</h4>
        </div>
        <div className="subscribe-features">
          <h4 className="with-bg">02</h4>
          <h4>Get premium magazines</h4>
        </div>
        <div className="subscribe-container">
          <input
            type="email"
            className="subscribe-input"
            placeholder="Enter Email"
          />
          <Button btnName={"Subscribe"}></Button>
        </div>
      </div>

      <div className="subscribe-image">
        <img src={images.update} alt="Subscribe_Image" />
      </div>
    </div>
  );
}

export default Subscribe;
