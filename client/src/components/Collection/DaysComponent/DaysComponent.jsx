import React from "react";

// INTERNAL IMPORT
import "./DaysComponent.css";
import images from "../../../assets/img/z-index.img";
import { MdVerified } from "react-icons/md";

function DaysComponent() {
  const nftData = {
    mainImageUrl: "creatorbackground2", // Replace with your image path
    gridImageUrls: ["creatorbackground1", "image3.jpg", "image4.jpg"], // Replace with your image paths
    title: "Amazing Collection",
    creatorName: "John Doe",
    isVerified: true,
    creatorText: "Creator",
    nftValue: 0.156,
  };

  return (
    <div className="collection-card">
      <img
        src={images.creatorbackground2}
        alt="Main_NFT_Image"
        className="main-image"
      />
      <div className="image-grid">
        {nftData.gridImageUrls.map((imageUrl, index) => (
          <img
            key={index}
            src={images.creatorbackground1}
            alt={`NFT_Image_${index + 2}`}
            className="sub-image"
          />
        ))}
      </div>
      <div className="details-container">
        <div className="card-title">{nftData.title}</div>
        <div className="creator-info">
          <div className="creator-details">
            <img
              src={images.user1}
              alt="Creator_Profile_Picture"
              className="creator-profile"
            />
            <div className="text-container">
              <span className="creator-text">{nftData.creatorText}</span>
              <span className="creator-name">{nftData.creatorName}</span>
              {nftData.isVerified && (
                <i className="verified-icon">
                  <MdVerified />
                </i>
              )}
            </div>
          </div>
          <div className="value">
            <span className="nft-value">{nftData.nftValue} ETH</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DaysComponent;
