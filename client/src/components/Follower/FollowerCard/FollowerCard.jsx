import React, { useState } from "react";

// INTERNAL IMPORT
import "./FollowerCard.css";
import images from "../../../assets/img/z-index.img";
import { MdVerified } from "react-icons/md";

function FollowerCard({ el }) {
  const [following, setFollowing] = useState(true);

  const follow = () => {
    if (!following) {
      setFollowing(true);
    } else {
      setFollowing(false);
    }
  };

  return (
    <div className="follower-card">
      <div className="background-profile">
        <img
          src={el.background}
          alt="background-images"
          className="background-img"
        />
        <span className="medal-count">#{el.rating}🥇</span>
        <img src={el.user} className="profile-img" alt="profile_image" />
      </div>
      <div className="follower-details">
        <div className="name-value">
          <div className="name">
            <span className="user-name">Jeremiah T.A</span>
            <i className="verified-icon">
              <MdVerified />
            </i>
          </div>
          <div className="value">
            <span className="nft-value">0.13 ETH</span>
          </div>
        </div>

        <button className="follow-btn" onClick={() => follow()}>
          {following ? "Following" : "Follow"}
        </button>
      </div>
    </div>
  );
}

export default FollowerCard;
