import React, { useState } from "react";

// INTERNAL IMPORT
import "./AudioCardSmall.css";

import images from "../../../assets/img/z-index.img";
import { IoIosHeart } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaImages } from "react-icons/fa";
import { FiPlay } from "react-icons/fi";
import { LiaPauseSolid } from "react-icons/lia";

// COMPONENTS
import {Like} from "../../z-index.component";

function AudioCardSmall() {
  const [play, setPlay] = useState(false);

  const likedBy = [1, 2, 3];

  return (
    <div className="nft-card">
      <div className="nft-card-image-container">
        <img
          src={images.creatorbackground5}
          alt="NFT_Image"
          className="nft-card-image"
        />
      </div>

      <div className="nft-card-details">
        <p className="nft-card-title">NFT music #2321</p>
        <div className="nft-liked-profile-price">
          {likedBy.map((user, i) => {
            return <Like key={i + 1} />;
          })}
          <div className="nft-music-price">
            <small>price</small>
            <p className="nft-card-price">1.00 ETH</p>
          </div>
        </div>
      </div>

      <i onClick={() => setPlay(!play)}>
        {play ? <LiaPauseSolid /> : <FiPlay />}
      </i>
    </div>
  );
}

export default AudioCardSmall;
