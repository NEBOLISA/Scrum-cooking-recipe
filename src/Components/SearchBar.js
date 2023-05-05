import React from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
function SearchBar() {
  return (
    <div className="searchbar">
      <input
        placeholder="Type the recipe you need e.g Jollof Rice"
        type="text"
      />
      <button className="searchbar_button">
        <p>Search</p>
        <ArrowOutwardOutlinedIcon className="material_arrow" />
      </button>
    </div>
  );
}

export default SearchBar;
