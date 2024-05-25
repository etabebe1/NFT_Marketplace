import React, { useState } from "react";

// INTERNAL IMPORT
import "./AudioCard.css";

import images from "../../../assets/img/z-index.img";
import { IoIosHeart } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaImages } from "react-icons/fa";
import { FiPlay } from "react-icons/fi";
import { LiaPauseSolid } from "react-icons/lia";

function AudioCard() {
  const [like, setLike] = useState(false);
  const [play, setPlay] = useState(false);

  return (
    <div className="audio-item">
      <div className="audio-item-image">
        <img src={images.nft_image_1} alt="nft_image" />
      </div>

      <div className="audio-item-details">
        <div className="audio-item-details-top">
          <div className="audio-item-details-top-left">
            <div className="audio-item-details-like-container">
              <i>{like ? <IoIosHeart /> : <IoIosHeartEmpty />}</i>
              <p className="audio-item-details-like-count">23</p>
            </div>
          </div>

          <div className="audio-item-details-top-right">
            <div className="audio-item-details-info">
              <small>Remaining time</small>
              <p>3h : 15m : 20s</p>
            </div>
          </div>
        </div>

        <div className="audio-item-details-bottom">
          <div className="audio-player-container">
            <img src={images.musiceWave} alt="music_wave" />
            <i onClick={() => setPlay(!play)}>
              {play ? <LiaPauseSolid /> : <FiPlay />}
            </i>
          </div>

          <div className="audio-item-details-price">
            <div className="audio-item-details-price-container">
              <h4>Clone #15679</h4>

              <div className="audio-item-details-price-info">
                <div className="audio-item-details-price-bid">
                  <small>Current Bid</small>
                  <p className="audio-item-details-price-bid-value">1.000ETH</p>
                </div>
                <div className="audio-item-details-price-stock">
                  <small className="audio-item-details-price-stock-label">
                    61 in stock
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AudioCard;
