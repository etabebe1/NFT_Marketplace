import React from "react";

//INTERNAL IMPORT
import "./SliderCard.css";

import images from "../../../assets/img/z-index.img";
import {motion} from "framer-motion"

function SliderCard() {
  return (
    <motion.div className="slider-card">
      <div className="background-profile">
        <img
          src={images.creatorbackground10}
          alt="background-images"
          className="background-img"
        />
      </div>
      <div className="slider-details">
        <div className="slider-card-left">
          <p>NFT video #3425</p>

          <div className="video-details-price-bid">
            <small>Price</small>
            <p className="video-details-price-bid-value">1.000ETH</p>
          </div>
        </div>
        <div className="slider-card-right">
          <p>1 fo 100</p>
          <div className="time-details">
            <small>Remaining Time</small>
            <p>3h : 15m : 20s</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default SliderCard;
