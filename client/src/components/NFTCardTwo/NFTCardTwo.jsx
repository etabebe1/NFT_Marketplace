import React, { useState } from "react";

// INTERNAL IMPORT
import "./NFTCardTwo.css";
import images from "../../assets/img/z-index.img";

import { IoIosHeart } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaImages } from "react-icons/fa";
import { IoMdAlarm } from "react-icons/io";

// COMPONENTS
import { Like } from "../z-index.component";

function NFTCardTwo({ NFTData }) {
  const [like, setLike] = useState(true);

  const likeNFT = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  return (
    <div className="nft-card-container">
      {NFTData.map((el, i) => (
        <div className="nft-card-two" key={i + 1}>
          <div className="nft-card-two-image">
            <img src={el} alt="nft_image" />
            <div className="nft-card-image-top" onClick={() => likeNFT()}>
              <FaImages />
              <div className="like">
                <i>{like ? <IoIosHeart /> : <IoIosHeartEmpty />}</i>
                <p>23</p>
              </div>
            </div>
          </div>
          <div className="nft-card-two-data">
            <div className="top-like">
              <Like />
              <span className="liked-by">34</span>
            </div>
            <div className="clone-number">
              <span>Clone #1</span>
            </div>
            <div className="bid-price">
              <div className="audio-item-details-price-bid">
                <small>Price</small>
                <p className="audio-item-details-price-bid-value">17.00ETH</p>
              </div>
              <span className="time-remaining">
                <IoMdAlarm /> {"3"} hours left
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NFTCardTwo;
