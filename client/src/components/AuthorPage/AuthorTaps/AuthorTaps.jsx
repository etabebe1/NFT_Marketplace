import React, { useState } from "react";

// INTERNAL IMPORT
import "./AuthorTaps.css";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";

function AuthorTaps({
  setCollectibles,
  setCreated,
  setLike,
  setFollower,
  setFollowing,
}) {
  const [openList, setOpenList] = useState(false);
  const [activeBtn, setActiveBtn] = useState(0);
  const [selectedMenu, setSelectedMenu] = useState("Most Recent");

  const listArray = [
    "Created By Admin",
    "Most Appreciated",
    "Most Discussed",
    "Most Viewed",
  ];

  const toggleDropdown = () => {
    setOpenList(!openList);
  };

  const openTab = (e) => {
    const btnText = e.target.innerText;
    // console.log(btnText);

    if (btnText === "Collectables") {
      setCollectibles(true);
      setCreated(false);
      setLike(false);
      setFollower(false);
      setFollowing(false);
      setActiveBtn(0);
    } else if (btnText === "Created") {
      setCollectibles(false);
      setCreated(true);
      setLike(false);
      setFollower(false);
      setFollowing(false);
      setActiveBtn(1);
    } else if (btnText === "Liked") {
      setCollectibles(false);
      setCreated(false);
      setLike(true);
      setFollower(false);
      setFollowing(false);
      setActiveBtn(2);
    } else if (btnText === "Followers") {
      setCollectibles(false);
      setCreated(false);
      setLike(false);
      setFollower(true);
      setFollowing(false);
      setActiveBtn(4);
    } else if (btnText === "Following") {
      setCollectibles(false);
      setCreated(false);
      setLike(false);
      setFollower(false);
      setFollowing(true);
      setActiveBtn(3);
    }
  };

  const handleMenuSelect = (item) => {
    setSelectedMenu(item);
    setOpenList(false);
  };

  return (
    <div className="author-taps">
      <div className="author-buttons-container">
        {["Collectables", "Created", "Liked", "Following", "Followers"].map(
          (btnText, i) => (
            <button
              key={i + 1}
              className={`author-tap-btn ${activeBtn === i ? "active" : ""}`}
              onClick={(e) => openTab(e)}
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

        {openList && (
          <ul className="dropdown-list">
            {listArray.map((el, i) => {
              return (
                <li key={i + 1} onClick={() => handleMenuSelect(el)}>
                  {el}
                  {selectedMenu === el && <FaCheck />}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default AuthorTaps;
