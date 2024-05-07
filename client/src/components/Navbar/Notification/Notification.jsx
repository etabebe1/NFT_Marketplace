import React from "react";

// INTERNAL IMPORT
import "./Notification.css";
import images from "../../../assets/img/z-index";
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";

const notificationData = [
  {
    profile: images.user1,
    name: "Jeremiah T.A",
    massage: "Thats Quite NFT I loved it ",
    time: "10 min ago",
    status: "online",
  },
  {
    profile: images.user2,
    name: "Helen J",
    massage: "NFT Marketplace notification",
    time: "10 min ago",
    status: "offline",
  },
  {
    profile: images.user1,
    name: "Jeremiah T.A",
    massage: "Thats Quite NFT I loved it ",
    time: "10 min ago",
    status: "online",
  },
  {
    profile: images.user2,
    name: "Helen J",
    massage: "NFT Marketplace notification",
    time: "10 min ago",
    status: "offline",
  },
  {
    profile: images.user1,
    name: "Jeremiah T.A",
    massage: "Thats Quite NFT I loved it ",
    time: "10 min ago",
    status: "online",
  },
  {
    profile: images.user2,
    name: "Helen J",
    massage: "NFT Marketplace notification",
    time: "10 min ago",
    status: "offline",
  },
  {
    profile: images.user1,
    name: "Jeremiah T.A",
    massage: "Thats Quite NFT I loved it ",
    time: "10 min ago",
    status: "online",
  },
  {
    profile: images.user2,
    name: "Helen J",
    massage: "NFT Marketplace notification",
    time: "10 min ago",
    status: "offline",
  },
];

function Notification() {
  return (
    <div className="notification-card-list">
      <p className="notification-title">Notification</p>
      <div className="notification-list-container">
        {/* New wrapper element */}
        <ul>
          {notificationData.map((list, index) => (
            <li key={index}>
              <img src={list.profile} alt="" />
              <div className="details-status-container">
                <div className="details">
                  <h4 className="name">{list.name}</h4>
                  <p className="message">{list.massage}</p>
                  <p className="very-small">{list.time}</p>
                </div>
                <div className="status">
                  {list.status === "online" ? <GoDotFill /> : <GoDot />}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>{" "}
      {/* Close the new wrapper element */}
    </div>
  );
}

export default Notification;
