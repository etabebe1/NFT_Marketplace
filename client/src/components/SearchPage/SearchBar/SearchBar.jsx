import React from "react";

// INTERNAL IMPORT
import "./SearchBar.css";
import { FaSearchengin } from "react-icons/fa6";

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." className="search-input" />
      <button type="submit" className="search-button">
        <FaSearchengin className="search-arrow" />
      </button>
    </div>
  );
}

export default SearchBar;
