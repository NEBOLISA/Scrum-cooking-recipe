import React from "react";
import "./FoodCard.css";
function FoodCard() {
  return (
    <div className="foodcard">
      <img
        className="food_image"
        src="https://www.chefspencil.com/wp-content/uploads/Top-21-Nigerian-Foods-.jpg"
        alt=""
      />
      <div className="food_name_wrapper">
        <p className="food_name">Egwusi</p>
      </div>
    </div>
  );
}

export default FoodCard;
