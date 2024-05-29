import React from "react";

// INTERNAL IMPORT
import "./Banner.css";
import images from "../../../assets/img/z-index.img";

function Banner() {
  return (
    <div className="banner">
      <img src={images.creatorbackground3} alt="Banner_Image" />
    </div>
  );
}

export default Banner;
