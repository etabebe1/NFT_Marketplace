import React, { useState, useEffect, useCallback } from "react";

// INTERNAL IMPORT
import "./NFTSlider.css";
import images from "../../assets/img/z-index.img";
import { Button } from "../z-index.component";

function NFTSlider() {
  const [idNumber, setIdNumber] = useState(1);
  // const [currentIndex, setCurrentIndex] = useState(1);

  const sliderData = [
    {
      title: "Hello NFT",
      id: 1,
      name: "Jeremiah T.A",
      collection: "GYM",
      price: "00000000064664 ETH",
      like: 243,
      image: images.user1,
      nftImage: images.nft_image_1,
      time: {
        days: 24,
        hours: 10,
        minutes: 11,
        seconds: 35,
      },
    },
    {
      title: "Buddy NFT",
      id: 1,
      name: "Baba T.A",
      collection: "Home",
      price: "0000000004264 ETH",
      like: 243,
      image: images.user2,
      nftImage: images.nft_image_2,
      time: {
        days: 24,
        hours: 10,
        minutes: 11,
        seconds: 35,
      },
    },
    {
      title: "Gym NFT",
      id: 1,
      name: "Naol Fekadu",
      collection: "Gym",
      price: "0000000004264 ETH",
      like: 243,
      image: images.user3,
      nftImage: images.nft_image_3,
      time: {
        days: 24,
        hours: 10,
        minutes: 11,
        seconds: 35,
      },
    },
    {
      title: "Dave NFT",
      id: 1,
      name: "Dave Hashiron",
      collection: "Gym",
      price: "0000000004264 ETH",
      like: 243,
      image: images.user4,
      nftImage: images.nft_1,
      time: {
        days: 24,
        hours: 10,
        minutes: 11,
        seconds: 35,
      },
    },
  ];

  const handleNextSlide = () => {};

  const handlePrevSlide = () => {};

  return <div className="nft-slider">NFT SLIDER</div>;
}

export default NFTSlider;
