import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

//INTERNAL IMPORT
import "./AuthorProfile.css";
import images from "../../../assets/img/z-index.img";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";
import { LuCopyCheck } from "react-icons/lu";
import { MdCloudUpload } from "react-icons/md";
import { MdVerified } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { MdReportProblem } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

// COMPONENTS
import { Button } from "../../z-index.component";

const socialData = [
  { name: "Facebook", icon: <FaFacebookF />, link: "" },
  { name: "Instagram", icon: <FaInstagram />, link: "" },
  { name: "Twitter", icon: <BsTwitterX />, link: "" },
  { name: "Linkedin", icon: <FaLinkedin />, link: "" },
];

function AuthorProfileCard() {
  const address = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

  const [copied, setCopied] = useState(false);
  const [follow, setFollow] = useState(false);
  const [shareReport, setShareReport] = useState(false);
  const [shareSocial, setShareSocial] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFollow = () => {
    setFollow(!follow);
  };

  const openShare = () => {
    setShareReport(false);
    setShareSocial(!shareSocial);
  };

  const openReport = () => {
    setShareSocial(false);
    setShareReport(!shareReport);
  };

  return (
    <div className="author-profile">
      <div className="img-description">
        <div className="author-profile-image-social">
          <img src={images.nft_image_2} alt="Collection_Image" />
        </div>

        <div className="author-profile-info">
          <div className="author-profile-info-text">
            <h1>
              Jeremiah T.A{" "}
              <span>
                <MdVerified />
              </span>
            </h1>
            <div className="author-address">
              <p>{address}</p>
              <CopyToClipboard text={address} onCopy={handleCopy}>
                <div className="copy-btn">
                  {copied ? <LuCopyCheck /> : <FaCopy />}
                </div>
              </CopyToClipboard>
            </div>
            <p className="desc">
              Punk #4786 / An OG Cryptopunk, hoarder of NFTs. Contributing to
              @ether_cards, an NFT Monetization Platform.
            </p>
          </div>

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
      </div>

      <div className="author-connect">
        <Button
          btnName={follow ? "Follow" : "Following"}
          handelClick={handleFollow}
        />
        <MdCloudUpload onClick={() => openShare()} />

        {shareSocial && (
          <div className="social-link-card">
            {socialData.map((social, i) => {
              return (
                <div className="social-link">
                  <i>{social.icon}</i>
                  <p>{social.name}</p>
                </div>
              );
            })}
          </div>
        )}

        <BsThreeDots onClick={() => openReport()} />

        {shareReport && (
          <div className="share-report">
            <MdReportProblem />
            <p>Report abuse</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AuthorProfileCard;
