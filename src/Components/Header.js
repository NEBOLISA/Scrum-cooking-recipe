import React from "react";
import "./Header.css";

import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import FoodCard from "./FoodCard";

function Header() {
  return (
    <div className="header">
      <NavBar />
      <div class="banner">
        <div class="banner_text">
          <h1>Looking For The Best Nigerian Recipes? </h1>
          <h1>
            <span>ChopNaija</span> Dey For You.
          </h1>
          <p>
            You one stop place to easily get any Nigerial dish of your choice
            prepared,
          </p>
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default Header;
