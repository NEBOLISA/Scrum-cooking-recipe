import React from "react";
import "./FirstSection.css";
import FoodCard from "./FoodCard";
import { useServiceProviderValue } from "../ServiceProvider";

function FirstSection() {
  const [{ popularFood }, dispatch] = useServiceProviderValue();
  const tagRegExp = new RegExp("<s*[^>]*>", "g");
  return (
    <div className="firstsection">
      <div className="heading_div">
        <h1>Popular Recipes</h1>
        <p>View All</p>
      </div>
      <div className="cards">
        {popularFood?.recipes.map((item) => (
          <FoodCard item={item} />
        ))}
      </div>

      <div className="heading_div latest_recipe">
        <h1>Latest Recipes</h1>
        <p>View All</p>
      </div>
      <div className="cards">
        {popularFood?.recipes.map((item) => (
          <FoodCard item={item} />
        ))}
      </div>
    </div>
  );
}

export default FirstSection;
