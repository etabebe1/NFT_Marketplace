import React, { useState } from "react";

// INTERNAL IMPORT
import "./AuthorTaps.css";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";

function AuthorTaps({ collectables, created, like, follower, following }) {
  const [openList, setOpenList] = useState(false);
  const [activeBtn, setActiveBtn] = useState(0);
  const [selectedMenu, setSelectedMenu] = useState("Most Recent");

  const listArray = [
    "Created By Admin",
    "Most Appreciated",
    "Most Discussed",
    "Most Viewed",
  ];

  const handleButtonClick = (index) => {
    setActiveBtn(index);
  };

  const toggleDropdown = () => {
    setOpenList(!openList);
  };

  const handleMenuSelect = (item) => {
    setSelectedMenu(item);
    setOpenList(false);
  };

  const renderDropdownItems = () => {
    return listArray.map((item, index) => (
      <li key={index} onClick={() => handleMenuSelect(item)}>
        {item}
        {selectedMenu === item && <FaCheck />}
      </li>
    ));
  };

  return (
    <div className="author-taps">
      <div className="author-buttons-container">
        {["Collectables", "Created", "Liked", "Following", "Followers"].map(
          (btnText, index) => (
            <button
              key={index}
              className={`author-tap-btn ${
                activeBtn === index ? "active" : ""
              }`}
              onClick={() => {
                handleButtonClick(index);
                console.log(index);
              }}
            >
              {btnText}
            </button>
          )
        )}
      </div>
      
      <div className="dropdown-container">
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          {selectedMenu} {openList ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
        {openList && <ul className="dropdown-list">{renderDropdownItems()}</ul>}
      </div>
    </div>
  );
}

export default AuthorTaps;
