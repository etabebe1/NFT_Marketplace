import React, { useState } from "react";

// INTERNAL IMPORT
import "./NFTDetailsImg.css";
import images from "../../../assets/img/z-index.img";
import { IoIosHeart } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaImages } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

function NFTDetailsImg() {
  // Accordion state
  const [activeIndex, setActiveIndex] = useState(0);

  // Optional: Add state for like count
  const [liked, setLiked] = useState(false);
  const likeCount = liked ? 1 : 0;

  const handleLikeClick = () => {
    setLiked(!liked); // Toggle like state
  };

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index); // Toggle active accordion
  };

  const nftDescription =
    "This is a detailed description of the NFT artwork. It can include information about the style, the artist's inspiration, and any other relevant details.";

  const nftDetails = {
    imageSize: "5000x3000 px",
    imageSizeMB: "5",
    contractAddress: "0x1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    tokenId: "123456",
  };

  return (
    <div className="nft-img-accordion">
      {/* Image with overlay */}
      <div className="nft-details-img">
        <img src={images.nft_image_3} alt="NFT_preview" className="nft-image" />
        <div className="nft-details-img-overlay">
          <i className="img-icon">
            <FaImages />
          </i>
          {/* Like button */}
          <div
            className={`nft-like-button ${liked ? "liked" : ""}`}
            onClick={handleLikeClick}
          >
            <i className="heart-icon">
              {liked ? <IoIosHeart /> : <IoIosHeartEmpty />}
            </i>{" "}
            {likeCount}
          </div>
        </div>

        {/* Accordion */}
        <div className="nft-details-accordion">
          <div
            className={`nft-details-section ${
              activeIndex === 0 ? "active" : ""
            }`}
            onClick={() => handleAccordionClick(0)}
          >
            <div className="title-arrow">
              <h3 className="nft-details-title">Description</h3>
              <i className="accordion-icon">
                {activeIndex === 0 ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </i>
            </div>
            <div className="nft-details-content">
              <p>{nftDescription}</p>
            </div>
          </div>

          <div
            className={`nft-details-section ${
              activeIndex === 1 ? "active" : ""
            }`}
            onClick={() => handleAccordionClick(1)}
          >
            <div className="title-arrow">
              <h3 className="nft-details-title">Details</h3>
              <i className="accordion-icon">
                {activeIndex === 1 ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </i>
            </div>

            <div className="nft-details-content">
              <ul>
                <li>
                  <span className="detail-value">{nftDetails.imageSize}</span>{" "}
                  Image(
                  <span className="detail-value">
                    {nftDetails.imageSizeMB}MB
                  </span>
                  )
                </li>
                <li>
                  <span className="detail-label">Contract Address:</span>
                  <span className="detail-value">
                    {nftDetails.contractAddress}
                  </span>
                </li>
                <li>
                  <span className="detail-label">Token ID:</span>
                  <span className="detail-value">{nftDetails.tokenId}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NFTDetailsImg;
