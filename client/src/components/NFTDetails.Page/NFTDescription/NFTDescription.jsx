import React, { useState } from "react";

//INTERNAL IMPORT
import "./NFTDescription.css";
import images from "../../../assets/img/z-index.img";

import {
  MdVerified,
  MdCloudUpload,
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
  const data = {
    BidHistory: [
      {
        title: "NFTDetailsPage - BearX #57234",
        profile: images.user9, // Replace with actual image URL
        currentBidAmount: 1000,
        bidderUsername: "John Doe",
        bidDate: "Jun 08",
        bidTime: "10:00 AM",
        location: "New York, NY",
        followerCount: 1234,
      },
      {
        title: "NFTDetailsPage - BearX #57234",
        profile: images.user10,
        currentBidAmount: 1250,
        bidderUsername: "Jane Smith",
        bidDate: "Jun 07",
        bidTime: "08:30 PM",
        location: "Los Angeles, CA",
        followerCount: 5678,
      },
      {
        title: "NFTDetailsPage - BearX #57234",
        profile: images.user3,
        currentBidAmount: 800,
        bidderUsername: "Alice Williams",
        bidDate: "Jun 06",
        bidTime: "05:15 PM",
        avatarColor: "#ff9900",
        isVerified: true,
      },
      {
        title: "NFTDetailsPage - BearX #57234",
        profile: images.user5, // Replace with actual image URL
        currentBidAmount: 1000,
        bidderUsername: "John Doe",
        bidDate: "Jun 08",
        bidTime: "10:00 AM",
        location: "New York, NY",
        followerCount: 1234,
      },
      {
        title: "NFTDetailsPage - BearX #57234",
        profile: images.user11,
        currentBidAmount: 1250,
        bidderUsername: "Jane Smith",
        bidDate: "Jun 07",
        bidTime: "08:30 PM",
        location: "Los Angeles, CA",
        followerCount: 5678,
      },
      {
        title: "NFTDetailsPage - BearX #57234",
        profile: images.user6,
        currentBidAmount: 800,
        bidderUsername: "Alice Williams",
        bidDate: "Jun 06",
        bidTime: "05:15 PM",
        avatarColor: "#ff9900",
        isVerified: true,
      },
    ],
    Provenance: [
      {
        title: "NFTDetailsPage - BearX #57234",
        profile: images.user8, // Replace with actual image URL
        currentBidAmount: 1000,
        bidderUsername: "John Doe",
        bidDate: "Jun 08",
        bidTime: "10:00 AM",
        location: "New York, NY",
        followerCount: 1234,
      },
      {
        title: "NFTDetailsPage - BearX #57234",
        profile: images.user4,
        currentBidAmount: 800,
        bidderUsername: "Alice Williams",
        bidDate: "Jun 06",
        bidTime: "05:15 PM",
        avatarColor: "#ff9900",
        isVerified: true,
      },
      {
        title: "NFTDetailsPage - BearX #57234",
        profile: images.user3,
        currentBidAmount: 800,
        bidderUsername: "Alice Williams",
        bidDate: "Jun 06",
        bidTime: "05:15 PM",
        avatarColor: "#ff9900",
        isVerified: true,
      },
      {
        title: "NFTDetailsPage - BearX #57234",
        profile: images.user1, // Replace with actual image URL
        currentBidAmount: 1000,
        bidderUsername: "John Doe",
        bidDate: "Jun 08",
        bidTime: "10:00 AM",
        location: "New York, NY",
        followerCount: 1234,
      },
      {
        title: "NFTDetailsPage - BearX #57234",
        profile: images.user6,
        currentBidAmount: 1250,
        bidderUsername: "Jane Smith",
        bidDate: "Jun 07",
        bidTime: "08:30 PM",
        location: "Los Angeles, CA",
        followerCount: 5678,
      },
      {
        title: "NFTDetailsPage - BearX #57234",
        profile: images.user5,
        currentBidAmount: 1250,
        bidderUsername: "Jane Smith",
        bidDate: "Jun 07",
        bidTime: "08:30 PM",
        location: "Los Angeles, CA",
        followerCount: 5678,
      },
    ],
    Owner: [
      {
        title: "NFTDetailsPage - BearX #57234",
        profile: images.user3, // Replace with actual image URL
        currentBidAmount: 1000,
        bidderUsername: "John Doe",
        bidDate: "Jun 08",
        bidTime: "10:00 AM",
        location: "New York, NY",
        followerCount: 1234,
      },
      {
        title: "NFTDetailsPage - BearX #57234",
        profile: images.user2,
        currentBidAmount: 1250,
        bidderUsername: "Jane Smith",
        bidDate: "Jun 07",
        bidTime: "08:30 PM",
        location: "Los Angeles, CA",
        followerCount: 5678,
      },
      {
        title: "NFTDetailsPage - BearX #57234",
        profile: images.user7,
        currentBidAmount: 800,
        bidderUsername: "Alice Williams",
        bidDate: "Jun 06",
        bidTime: "05:15 PM",
        avatarColor: "#ff9900",
        isVerified: true,
      },
      {
        title: "NFTDetailsPage - BearX #57234",
        profile: images.user11, // Replace with actual image URL
        currentBidAmount: 1000,
        bidderUsername: "John Doe",
        bidDate: "Jun 08",
        bidTime: "10:00 AM",
        location: "New York, NY",
        followerCount: 1234,
      },
    ],
  };

  const reportProblem = () => {
    setShareSocial(false);
    setShareReport(!shareReport);
  };

  const openSocials = () => {
    setShareReport(false);
    setShareSocial(!shareSocial);
  };

  return (
    <div className="nft-descriptions">
      <div className="description-container">
        {/* PART ONE */}
        <div className="virtual">
          <p className="virtual-text">Virtual Worlds</p>

          <div className="share-icons">
            <i onClick={() => openSocials()}>
              <MdCloudUpload />
            </i>

            {shareSocial && (
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
            )}

            <i onClick={() => reportProblem()}>
              <BsThreeDots />
            </i>

            {shareReport && (
              <div className="report-link">
                <span>
                  <MdReportProblem />
                  Report problem
                </span>
              </div>
            )}
          </div>
        </div>

        {/* PART TWO */}
        <div className="title-profile">
          <h1 className="title">BearX #57234</h1>
          <div className="profile">
            <div className="user">
              <img src={images.user2} alt="user_profile" />
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
              <h1>23</h1>
              <p>hour</p>
            </div>
            <div>
              <h1>16</h1>
              <p>mins</p>
            </div>
            <div>
              <h1>32</h1>
              <p>secs</p>
            </div>
          </div>
        </div>

        {/* PART FOUR */}
        <div className="bid-price">
          <div className="bid-price-box">
            <small>Current Bid</small>
            <p>1.000ETH (~$39,998)</p>
          </div>
          <div className="bid-price-stock">
            <small>61 in stock</small>
          </div>
        </div>

        <div className="btn-container">
          <Button btnName={"Place a bid"} icon={<FaWallet />} />
          <Button btnName={"Make offer"} icon={<FaPercentage />} />
        </div>
      </div>

      <NFTTabs data={data} />
    </div>
  );
}

export default NFTDescription;
