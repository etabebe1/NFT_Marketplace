import React, { useState } from "react";

//INTERNAL IMPORT
import "./NFTDescription.css";
import images from "../../../assets/img/z-index.img";

import {
  MdVerified,
  MdCloud,
  MdTimer,
  MdReportProblem,
  MdOutlineDeleteSweep,
} from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaWallet } from "react-icons/fa6";
import { FaPercentage } from "react-icons/fa";

import { IoClose } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

import { BiTransfer, BiDollar } from "react-icons/bi";

// COMPONENTS
import { Button } from "../../z-index.component";
import { NFTTabs } from "../../z-index.component.page";

const socialData = [
  { name: "Facebook", icon: <FaFacebookF />, link: "" },
  { name: "Instagram", icon: <FaInstagram />, link: "" },
  { name: "Twitter", icon: <BsTwitterX />, link: "" },
  { name: "Linkedin", icon: <FaLinkedin />, link: "" },
];

function NFTDescription() {
  const [NFTMenu, setNFTMenu] = useState(false);
  const [shareSocial, setShareSocial] = useState(false);
  const [shareReport, setShareReport] = useState(false);

  return (
    <div className="nft-descriptions">
      <div className="description-container">
        {/* PART ONE */}
        <div className="virtual">
          <p>Virtual World</p>

          <div className="share-icons">
            <i onClick={() => setShareSocial(!shareSocial)}>
              <MdCloud />
            </i>

            {/* {shareSocial && ( */}
            <div className="social-link-card">
              {socialData.map((social, i) => {
                return (
                  <div className="social-link" key={i + 1}>
                    <i>{social.icon}</i>
                    <p>{social.name}</p>
                  </div>
                );
              })}
            </div>
            {/* )} */}

            <i onClick={() => {}}>
              <BsThreeDots />
            </i>
          </div>
        </div>

        {/* PART TWO */}
        <div className="title-profile">
          <h1 className="title">BearX #57234</h1>
          <div className="profile">
            <div className="user">
              <img src={images.user3} alt="user_profile" />
              <div className="user-details">
                <p>creator</p>
                <span>
                  Jeremiah T.A <MdVerified />
                </span>
              </div>
            </div>
            <div className="user">
              <img src={images.user3} alt="user_profile" />
              <div className="user-details">
                <p>creator</p>
                <span>
                  Jeremiah T.A <MdVerified />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* PART THREE */}

        <div className="auction">
          <p>
            <MdTimer /> Auction ending in:
          </p>

          <div className="timer">
            <div>
              <h1>2</h1>
              <p>Days</p>
            </div>
            <div>
              <h1>2</h1>
              <p>hour</p>
            </div>
            <div>
              <h1>2</h1>
              <p>mins</p>
            </div>
            <div>
              <h1>2</h1>
              <p>secs</p>
            </div>
          </div>
        </div>

        {/* PART FOUR */}
        <div className="bid-price">
          <div className="bid-price-box">
            <small>Current Bid</small>
            <p>1.000ETH</p>
          </div>
          <div className="bid-price-stock">
            <small>61 in stock</small>
          </div>
        </div>

        <div className="btn-container">
          <Button btnName={"Place a bid"} />
          <Button btnName={"Make offer"} />
        </div>
      </div>
    </div>
  );
}

export default NFTDescription;
