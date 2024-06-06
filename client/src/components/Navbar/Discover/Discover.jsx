import React from "react";
import { Link } from "react-router-dom";

// INTERNAL IMPORT
import "./Discover.css";

const discoverData = [
  {
    name: "Collection",
    link: "/collection",
  },
  {
    name: "Search",
    link: "/search",
  },
  {
    name: "Author Profile",
    link: "/author",
  },
  {
    name: "NFT Details",
    link: "/nft-details",
  },
  {
    name: "Account Setting",
    link: "/settings",
  },
  {
    name: "Connect Wallet",
    link: "/connectwallet",
  },
  {
    name: "Blog",
    link: "/blog",
  },
];

function Discover() {
  return (
    <ul className="discover-card-list">
      {discoverData.map((list, index) => (
        <li key={index}>
          <Link to={list.link}>{list.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Discover;
