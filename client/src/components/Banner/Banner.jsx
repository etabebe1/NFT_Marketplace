import React from "react";

// INTERNAL IMPORT
import "./Banner.css";
import images from "../../assets/img/z-index.img";

function Banner({ bannerImage }) {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Banner_Image" />
    </div>
  );
}

export default Banner;
