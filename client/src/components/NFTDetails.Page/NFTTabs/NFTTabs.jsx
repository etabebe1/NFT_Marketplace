import React, { useState } from "react";

// INTERNAL IMPORT
import "./NFTTabs.css";

import { MdVerified } from "react-icons/md";

function NFTTabs({ data }) {
  const [activeTab, setActiveTab] = useState("BidHistory");

  const handleClick = (tabName) => {
    setActiveTab(tabName);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "BidHistory":
        return (
          <div className="tab-content">
            {data.BidHistory.map((item, index) => (
              <div className="bid-history-item" key={index}>
                <img src={item.profile} alt="user_profile" />
                <div className="bid-details">
                  <p>
                    Offered by ${item.currentBidAmount} by {item.bidderUsername}
                    <MdVerified />
                  </p>
                  <span>
                    {item.bidDate} at {item.bidTime}
                  </span>
                </div>
              </div>
            ))}
          </div>
        );
      case "Provenance":
        return (
          <div className="tab-content">
            {data.Provenance.map((item, index) => (
              <div className="bid-history-item" key={index}>
                <img src={item.profile} alt="user_profile" />
                <div className="bid-details">
                  <p>
                    Offered by ${item.currentBidAmount} by {item.bidderUsername}
                    <MdVerified />
                  </p>
                  <span>
                    {item.bidDate} at {item.bidTime}
                  </span>
                </div>
              </div>
            ))}
          </div>
        );
      case "Owner":
        return (
          <div className="tab-content">
            {data.Owner.map((item, index) => (
              <div className="bid-history-item" key={index}>
                <img src={item.profile} alt="user_profile" />
                <div className="bid-details">
                  <p>
                    Offered by ${item.currentBidAmount} by {item.bidderUsername}
                    <MdVerified />
                  </p>
                  <span>
                    {item.bidDate} - {item.bidTime}
                  </span>
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="nft-tabs">
      <div className="tab-buttons">
        <button
          className={activeTab === "BidHistory" ? "active" : ""}
          onClick={() => handleClick("BidHistory")}
        >
          Bid History
        </button>
        <button
          className={activeTab === "Provenance" ? "active" : ""}
          onClick={() => handleClick("Provenance")}
        >
          Provenance
        </button>
        <button
          className={activeTab === "Owner" ? "active" : ""}
          onClick={() => handleClick("Owner")}
        >
          Owner
        </button>
      </div>
      {renderTabContent()}
    </div>
  );
}

export default NFTTabs;
