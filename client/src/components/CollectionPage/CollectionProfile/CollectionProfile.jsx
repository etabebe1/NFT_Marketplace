import React from "react";

//INTERNAL IMPORT
import "./CollectionProfile.css";
import images from "../../../assets/img/z-index.img";

import { IoClose } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const socialData = [
  { name: "Facebook", icon: <FaFacebookF />, link: "" },
  { name: "Instagram", icon: <FaInstagram />, link: "" },
  { name: "Twitter", icon: <BsTwitterX />, link: "" },
  { name: "Linkedin", icon: <FaLinkedin />, link: "" },
];

function CollectionProfile() {
  const marketIncrements = [
    {
      inUSD: 328785,
      inPercent: 1.11,
      type: "increase",
    },
    {
      inUSD: 153457,
      inPercent: 3.1,
      type: "increase",
    },
    {
      inUSD: 69879,
      inPercent: 1.61,
      type: "decrease",
    },
    {
      inUSD: 126345,
      inPercent: 2.61,
      type: "increase",
    },
  ];

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="collection-profile">
      <div className="collection-profile-image-social">
        <img src={images.nft_image_2} alt="Collection_Image" />
        <ul className="social-links">
          {socialData.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noreferrer">
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="collection-profile-info">
        <div className="collection-profile-info-text">
          <h1>Awesome NFTs collection</h1>
          <p>
            VERSE-GRID is home to 5,555 generative arts where colors reign
            supreme. Leave the drab reality and enter the world of VERSE-GRID by
            Museums of Toys.
          </p>
        </div>

        <div className="market-increments">
          {marketIncrements.map((el, i) => (
            <div key={i + 1} className="market-increment">
              <span>Floor Price</span>
              <span>${formatNumber(el.inUSD)}</span>
              <span>
                {el.type === "increase" ? "+" : "-"}
                {el.inPercent}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CollectionProfile;
