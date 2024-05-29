import React, { useState } from "react";

// INTERNAL IMPORT
import "./Follower.css";
import images from "../../assets/img/z-index.img";
import { FollowerCard } from "../z-index.component";
import { Button } from "../z-index.component";

import { FaMedal } from "react-icons/fa";
import { RiUserFollowLine } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { TbBackground } from "react-icons/tb";

function Follower() {
  const [activeTab, setActiveTab] = useState("popular");

  const cardData = {
    popular: [
      {
        background: images.creatorbackground1,
        user: images.user2,
        rating:23
      },
      {
        background: images.creatorbackground2,
        user: images.user3,
        rating:29
      },
      {
        background: images.creatorbackground3,
        user: images.user4,
        rating:65
      },
      {
        background: images.creatorbackground4,
        user: images.user5,
        rating:12
      },
      {
        background: images.creatorbackground5,
        user: images.user6,
        rating:53
      },
      {
        background: images.creatorbackground6,
        user: images.user7,
        rating:92
      },
      {
        background: images.creatorbackground7,
        user: images.user8,
        rating:56
      },
    ],
    following: [
      {
        background: images.creatorbackground3,
        user: images.user2,
        rating:67
      },
      {
        background: images.creatorbackground4,
        user: images.user3,
        rating:92
      },
      {
        background: images.creatorbackground1,
        user: images.user4,
        rating:1
      },
      {
        background: images.creatorbackground6,
        user: images.user7,
        rating:56
      },
      {
        background: images.creatorbackground7,
        user: images.user6,
        rating:43
      },
      {
        background: images.creatorbackground2,
        user: images.user5,
        rating:34
      },
      {
        background: images.creatorbackground5,
        user: images.user8,
        rating:73,
      },
    ],
    news: [
      {
        background: images.creatorbackground9,
        user: images.user10,
        rating:63
      },
      {
        background: images.creatorbackground9,
        user: images.user8,
        rating:82
      },
      {
        background: images.creatorbackground8,
        user: images.user9,
        rating:63
      },
      {
        background: images.creatorbackground10,
        user: images.user10,
        rating:92
      },
      {
        background: images.creatorbackground11,
        user: images.user1,
        rating:83
      },
      {
        background: images.creatorbackground7,
        user: images.user8,
        rating:63
      },
      {
        background: images.creatorbackground2,
        user: images.user3,
        rating:22
      },
    ],
  };

  const handleTabClick = (tabName) => {
    if (activeTab !== tabName) {
      setActiveTab(tabName);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "popular":
        return (
          <div className="card-container">
            {cardData.popular.map((el, i) => (
              <FollowerCard key={i + 1} el={el} />
            ))}
          </div>
        );
      case "following":
        return (
          <div className="card-container">
            {cardData.following.map((el, i) => (
              <FollowerCard key={i + 1} el={el} />
            ))}
          </div>
        );
      case "news":
        return (
          <div className="card-container">
            {cardData.news.map((el, i) => (
              <FollowerCard key={i + 1} el={el} />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="follower-container">
      <div className="title-container">
        <h2>Top List Creators</h2>
        <div className="tabs-container">
          <button
            className={`tab-button ${activeTab === "popular" && "active"}`}
            onClick={() => handleTabClick("popular")}
          >
            <IoPerson /> Person
          </button>
          <button
            className={`tab-button ${activeTab === "following" && "active"}`}
            onClick={() => handleTabClick("following")}
          >
            <RiUserFollowLine /> Following
          </button>
          <button
            className={`tab-button ${activeTab === "news" && "active"}`}
            onClick={() => handleTabClick("news")}
          >
            <FaMedal /> NoteWorthy
          </button>
        </div>
      </div>

      {renderContent()}

      <div className="button-container">
        <Button btnName="Show Memories" />
        <Button btnName="Become Author" />
      </div>
    </div>
  );
}

export default Follower;
