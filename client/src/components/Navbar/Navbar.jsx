import React, { useState } from "react";

// INTERNAL IMPORT
import "./Navbar.css";
import {
  Discover,
  HelpCenter,
  Notification,
  Profile,
  SideBar,
} from "./z-index";
import { Button } from "../z-index-component";
import images from "../../assets/img/z-index";

import { FaBell } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";

function Navbar() {
  const [discover, setDiscover] = useState(false);
  const [helpCenter, setHelpCenter] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openMenu = (e) => {
    const elementText = e.target.innerText;

    console.log(elementText);

    if (elementText === "Discover") {
      setDiscover(!discover);
      setHelpCenter(false);
      setNotification(false);
      setProfile(false);
    } else if (elementText === "Help Center") {
      setDiscover(false);
      setHelpCenter(!helpCenter);
      setNotification(false);
      setProfile(false);
    } else {
      setDiscover(false);
      setHelpCenter(false);
      setNotification(false);
      setProfile(false);
    }
  };

  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setDiscover(false);
      setHelpCenter(false);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openProfile = () => {
    if (!profile) {
      setNotification(false);
      setDiscover(false);
      setHelpCenter(false);
      setProfile(true);
    } else {
      setProfile(false);
    }
  };

  const openSideBar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true);
    } else {
      setOpenSideMenu(false);
    }
  };

  return (
    <nav className="navbar">
      {/* BASE NAVBAR */}
      <div className="navbar-left-right-container">
        {/* Navbar left start */}
        <div className="navbar-left">
          <div className="nav-bar-log-container">
            <img src={images.logo} alt="Logo" className="logo" />
          </div>

          <div className="navbar-input-search">
            <div className="custom-input">
              <input
                type="text"
                className="search-input"
                placeholder="Search NFT"
              />
              <i className="search-icon">
                <IoMdSearch></IoMdSearch>
              </i>
            </div>
          </div>
        </div>
        {/* Navbar left end */}

        {/* Navbar right start */}
        <div className="navbar-right">
          {/* Discover menu */}
          <div className="navbar-right-discover">
            <p className="nav-link" onClick={(e) => openMenu(e)}>
              Discover
            </p>

            {discover && (
              <div className="navbar-right-discover-box absolute">
                <Discover></Discover>
              </div>
            )}
          </div>

          {/* Help center */}
          <div className="navbar-right-help-center">
            <p className="nav-link" onClick={(e) => openMenu(e)}>
              Help Center
            </p>

            {helpCenter && (
              <div className="navbar-right-help-center-box absolute">
                <HelpCenter></HelpCenter>
              </div>
            )}
          </div>

          {/* Notification */}
          <i className="notification">
            <FaBell onClick={() => openNotification()}></FaBell>

            {notification && (
              <div className="absolute to-left">
                <Notification></Notification>
              </div>
            )}
          </i>

          {/* Button container */}
          <div className="nav-btn">
            <Button btnName={"connect wallet"}></Button>
          </div>

          {/* Profile */}
          <div className="profile-dropdown">
            <img
              src={images.user1}
              alt="User Avatar"
              className="profile-pic"
              onClick={() => openProfile()}
            />

            {profile && (
              <div className="absolute to-right center-on-mobile">
                <Profile></Profile>
              </div>
            )}
          </div>
        </div>
        {/* Navbar right end */}

        {/* Navbar menu button */}
        <div className="navbar-right-menuBtn">
          <CgMenuRight
            className="menuIcon"
            onClick={() => openSideBar()}
          ></CgMenuRight>
        </div>
      </div>

      {/* Sidebar component on mobile */}
      <div className={`sidebar-container ${openSideMenu && "open"}`}>
        <SideBar setOpenSideMenu={setOpenSideMenu}></SideBar>
      </div>
    </nav>
  );
}

export default Navbar;
