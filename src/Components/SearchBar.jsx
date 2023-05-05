import React from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  return (
    <div className="searchbar">
      <SearchIcon />
      <input placeholder="Search" type="text" />
    </div>
  );
}

export default SearchBar;
