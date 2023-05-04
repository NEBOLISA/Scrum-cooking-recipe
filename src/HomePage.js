import React from "react";
import "./HomePage.css";
import SearchBar from "./Components/SearchBar";
import FoodCard from "./Components/FoodCard";

function HomePage() {
  return (
    <div className="homepage">
      <SearchBar />
      {/* sections headings */}
      <FoodCard />
    </div>
  );
}

export default HomePage;
