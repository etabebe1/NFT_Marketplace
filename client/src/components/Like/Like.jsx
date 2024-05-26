import React from "react";

// INTERNAL IMPORT
import "./Like.css"

import images from "../../assets/img/z-index.img"


function Like() {
  return <div className="like-component">
  <img src={images.user4} alt="User Profile" className="like-profile-picture" />
</div>
}

export default Like;
