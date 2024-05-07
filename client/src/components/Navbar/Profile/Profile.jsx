import React from "react";

// INTERNAL IMPORT
import "./Profile.css";
import images from "../../../assets/img/z-index";

import { IoHome } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbLogout } from "react-icons/tb";

const profileActions = [
  { icon: <IoHome />, text: "My Profile" },
  { icon: <RiTeamFill />, text: "My Team" },
  { icon: <FaUserEdit />, text: "Edit Profile" },
  { icon: <MdHelpCenter />, text: "Help" },
  { icon: <TbLogout />, text: "Disconnect" },
];

function Profile() {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img src={images.user1} alt="Profile_Picture" />
        <div className="user-info">
          <h4>John Doe</h4>
          <p>0x1234...ABCD</p>
        </div>
      </div>
      <div className="profile-actions">
        <ul>
          {profileActions.map((action, index) => (
            <li key={index}>
              <i>{action.icon}</i>
              <span>{action.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
