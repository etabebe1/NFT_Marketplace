import React, { useState } from "react";

// INTERNAL IMPORT
import "./Collection.css";
import { IoIosAlarm } from "react-icons/io";
import { LiaCalendarAlt } from "react-icons/lia";
import { PiCalendarDotsFill } from "react-icons/pi";
import { DaysComponent } from "../z-index.component";

function Collection() {
  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

  const CardArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const followingArray = [1, 2, 3, 4];
  const newsArray = [1, 2, 3, 4, 5, 6];

  const openPopular = () => {
    if (!popular) {
      setPopular(true);
      setFollowing(false);
      setNews(false);
    }
  };

  const openFollower = () => {
    if (!following) {
      setPopular(false);
      setFollowing(true);
      setNews(false);
    }
  };

  const openNews = () => {
    if (!news) {
      setPopular(false);
      setFollowing(false);
      setNews(true);
    }
  };

  return (
    <div className="collection">
      <div className="collection_title">
        <h2>Top List Creators</h2>
        <div className="collection_collections">
          <div
            className={`collection_collections_btn ${popular && "active"}`}
            onClick={() => openPopular()}
          >
            <button className={popular ? "active" : ""}>
              <IoIosAlarm /> 24 hours
            </button>
          </div>
          <div
            className={`collection_collections_btn ${following && "active"}`}
            onClick={() => openFollower()}
          >
            <button className={following ? "active" : ""}>
              <LiaCalendarAlt /> 7 days
            </button>
          </div>
          <div
            className={`collection_collections_btn ${news && "active"}`}
            onClick={() => openNews()}
          >
            <button className={news ? "active" : ""}>
              <PiCalendarDotsFill /> 30 days
            </button>
          </div>
        </div>
      </div>

      {popular && (
        <div className="collection_box">
          {CardArray.map((el, i) => (
            <DaysComponent key={i + 1} />
          ))}
        </div>
      )}

      {following && (
        <div className="collection_box">
          {followingArray.map((el, i) => (
            <DaysComponent key={i + 1} />
          ))}
        </div>
      )}
      {news && (
        <div className="collection_box">
          {newsArray.map((el, i) => (
            <DaysComponent key={i + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Collection;
