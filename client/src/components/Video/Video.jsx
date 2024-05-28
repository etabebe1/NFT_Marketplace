import React from "react";

// INTERNAL IMPORT
import "./Video.css";

import images from "../../assets/img/z-index.img";

function Video() {
  return (
    <div className="video-component">
      <header>
        <h1>
          <span>🎬</span>The Videos
        </h1>
        <p>
          Check out our hottest videos. View more and share more now
          perspectives on just about any topics. Everyone's welcomed.
        </p>
      </header>
      <img src={images.NFTVideo} alt="Video Thumbnail" />
    </div>
  );
}

export default Video;
