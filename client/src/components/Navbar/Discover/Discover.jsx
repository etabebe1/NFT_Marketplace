import React from "react";

// INTERNAL IMPORT
import "./Discover.css";

const discoverData = [
  {
    name: "Collection",
    link: "",
  },
  {
    name: "Search",
    link: "",
  },
  {
    name: "Author Profile",
    link: "",
  },
  {
    name: "NFT Details",
    link: "",
  },
  {
    name: "Account Setting",
    link: "",
  },
  {
    name: "Connect Wallet",
    link: "",
  },
  {
    name: "Blog",
    link: "",
  },
];

function Discover() {
  return (
    <ul className="discover-card-list">
      {discoverData.map((list, index) => (
        <li key={index}>{list.name}</li>
      ))}
    </ul>
  );
}

export default Discover;
