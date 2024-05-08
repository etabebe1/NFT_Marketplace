import React from "react";

// INTERNAL IMPORT
import "./SideBar.css";
import images from "../../../assets/img/z-index.img";
import { Button } from "../../z-index.component";

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
  { name: "YouTube", icon: <FaYoutube />, link: "" },
];

const helpCenterData = [
  {
    name: "About",
    link: "",
  },
  {
    name: "Contact Us",
    link: "",
  },
  {
    name: "Sign Up",
    link: "",
  },
  {
    name: "Sign In",
    link: "",
  },
  {
    name: "Subscription",
    link: "",
  },
];

const discoverData = [
  {
    name: "Collection",
    link: "",
  },
  {
    name: "Search",
    link: "",
  },
  {
    name: "Author Profile",
    link: "",
  },
  {
    name: "NFT Details",
    link: "",
  },
  {
    name: "Account Setting",
    link: "",
  },
  {
    name: "Connect Wallet",
    link: "",
  },
  {
    name: "Blog",
    link: "",
  },
];

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="accordion-item">
      <div className={`accordion-title`} onClick={toggleOpen}>
        <span className={`title`}>{title}</span>
        <i className={`dropdown-arrow ${isOpen && "rotate"}`}>
          <IoMdArrowDropdown />
        </i>
      </div>
      <div className={`accordion-content ${isOpen ? "show" : ""}`}>
        {children}
      </div>
    </div>
  );
};

function SideBar({ setOpenSideMenu }) {
  const closeSideBar = () => {
    setOpenSideMenu(false);
  };

  return (
    <div className={`sidebar `}>
      {/* Close button (optional) */}
      <button className="sidebar-close" onClick={closeSideBar}>
        <IoClose />
      </button>
      {/* Logo section */}
      <div className="sidebar-logo">
        <img src={images.logo} alt="Logo" className="logo" />
        <p className="company-description">
          Discover the most outstanding on all topics of NFT & write your own
          stories and share them.
        </p>
        <ul className="social-media-links">
          {socialData.map((list, index) => (
            <i key={index + 1}>{list.icon}</i>
          ))}
        </ul>
      </div>

      {/* Navigation section */}
      <div className="sidebar-navigation">
        <AccordionItem title="Discover">
          <ul>
            {discoverData.map((item) => (
              <li key={item.name}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </AccordionItem>
        <AccordionItem title="Help Center">
          <ul>
            {helpCenterData.map((item) => (
              <li key={item.name}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </AccordionItem>
      </div>

      {/* Action buttons section */}
      <div className="sidebar-actions">
        <Button btnName={"Create"}></Button>
        <Button btnName={"Connect Wallet"}></Button>
      </div>
    </div>
  );
}

export default SideBar;
