import React from "react";

// INTERNAL IMPORT
import "./Like.css";

import images from "../../assets/img/z-index.img";

function Like() {
  const imagesArray = [images.user1, images.user3, images.user4];

  return (
    <div className="like-component">
      {imagesArray.map((img, i) => {
        return (
          <img
            src={img}
            key={i + 1}
            alt="User Profile"
            className="like-profile-picture"
          />
        );
      })}
    </div>
  );
}

export default Like;
