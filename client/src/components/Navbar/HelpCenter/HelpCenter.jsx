import React from "react";

// INTERNAL IMPORT
import "./HelpCenter.css";

const helpCenterData = [
  {
    name: "About",
    link: "",
  },
  {
    name: "Contact Us",
    link: "",
  },
  {
    name: "Sign Up",
    link: "",
  },
  {
    name: "Sign In",
    link: "",
  },
  {
    name: "Subscription",
    link: "",
  },
];

function HelpCenter() {
  return (
    <ul className="help-card-list">
      {helpCenterData.map((list, index) => (
        <li key={index}>{list.name}</li>
      ))}
    </ul>
  );
}

export default HelpCenter;
