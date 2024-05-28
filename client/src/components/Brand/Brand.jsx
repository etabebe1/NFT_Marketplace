import React from "react";

// INTERNAL IMPORT
import "./Brand.css";
import images from "../../assets/img/z-index.img"; // Assuming z-index.img contains your logo image

// COMPONENTS
import { Button } from "../z-index.component";

function Brand() {
  return (
    <div className="brand-section">
      <div className="brand-image">
        <img src={images.earn} alt="Brand Logo" />
      </div>

      <div className="brand-content">
        <img src={images.logo} alt="company_logo" />
        <h1>Earn free crypto with Ciscrypt</h1>
        <p>Ciscrypt is a platform that allows you to earn free crypto.</p>
        <div className="button-container">
          <Button btnName="Get Started" />
          <Button btnName="Learn More" />
        </div>
      </div>
    </div>
  );
}

export default Brand;
