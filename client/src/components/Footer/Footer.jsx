import React from "react";

// INTERNAL IMPORT
import "./Footer.css";
import images from "../../assets/img/z-index";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

import Button from "../Button/Button";

const discoverData = [
  { name: "Collection", link: "" },
  { name: "Search", link: "" },
  { name: "Author Profile", link: "" },
  { name: "NFT Details", link: "" },
  { name: "Account Setting", link: "" },
  { name: "Connect Wallet", link: "" },
  { name: "Blog", link: "" },
];

const helpCenterData = [
  { name: "About", link: "" },
  { name: "Contact Us", link: "" },
  { name: "Sign Up", link: "" },
  { name: "Sign In", link: "" },
  { name: "Subscription", link: "" },
];

const socialData = [
  <FaFacebookF />,
  <FaInstagram />,
  <BsTwitterX />,
  <FaLinkedin />,
  <FaYoutube />,
];

const SocialMediaLinks = () => {
  return (
    <div className="social-media-links">
      {socialData.map((icon, index) => (
        <button key={index} href="#">
          {icon}
        </button>
      ))}
    </div>
  );
};

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img src={images.logo} alt="Logo" className="footer-logo" />
          <p className="footer-text">
            Ethiopian first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell and discover
            exclusive digital items.
          </p>
          <SocialMediaLinks />
        </div>

        <div className="footer-section list-container">
          <h3 className="footer-heading">Discover</h3>
          <ul className="footer-list">
            {discoverData.map((item) => (
              <li key={item.name}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section list-container">
          <h3 className="footer-heading">Help Center</h3>
          <ul className="footer-list">
            {helpCenterData.map((item) => (
              <li key={item.name}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading ">Subscribe</h3>
          <div className="subscribe-container">
            <input
              type="email"
              className="subscribe-input"
              placeholder="Enter Email"
            />
            <Button btnName={"Subscribe"}></Button>
          </div>
          <p className="footer-text">
            Discover, collect and sell extraordinary NFTs OpenSea is the world
            first and largest NFT marketplace.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
