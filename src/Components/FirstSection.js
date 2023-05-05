import React from "react";
import "./FirstSection.css";
import FoodCard from "./FoodCard";

function FirstSection() {
  return (
    <div className="firstsection">
      <div className="heading_div">
        <h1>Popular Recipes</h1>
        <p>View All</p>
      </div>
      <div className="cards">
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </div>

      <div className="heading_div latest_recipe">
        <h1>Latest Recipes</h1>
        <p>View All</p>
      </div>
      <div className="cards">
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </div>
    </div>
  );
}

export default FirstSection;
