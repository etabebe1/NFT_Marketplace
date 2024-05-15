import React, { useState } from "react";

// INTERNAL IMPORT
import "./Follower.css";
import { FollowerCard } from "../z-index.component";
import { Button } from "../z-index.component";

import { FaMedal } from "react-icons/fa";
import { RiUserFollowLine } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";

function Follower() {
  const [activeTab, setActiveTab] = useState("popular");

  const cardData = {
    popular: [1, 2, 3, 4, 5, 6, 7, 8],
    following: [1, 2, 3, 4],
    news: [1, 2, 3, 4, 5, 6],
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
              <FollowerCard key={i + 1} />
            ))}
          </div>
        );
      case "following":
        return (
          <div className="card-container">
            {cardData.following.map((el, i) => (
              <FollowerCard key={i + 1} />
            ))}
          </div>
        );
      case "news":
        return (
          <div className="card-container">
            {cardData.news.map((el, i) => (
              <FollowerCard key={i + 1} />
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
