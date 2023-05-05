import React from "react";
import "./FoodCard.css";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
function FoodCard() {
  return (
    <div className="foodcard">
      <img
        className="food_image"
        src="https://www.chefspencil.com/wp-content/uploads/Top-21-Nigerian-Foods-.jpg"
        alt=""
      />
      <div className="wrapper_div">
        <div className="food_category_name_div">
          <p>Rice Recipe</p>
        </div>
        <div className="action_btn_div">
          <ShareOutlinedIcon className="materialshare" />
          <FavoriteBorderOutlinedIcon className="materialfav" />
        </div>
      </div>
      <h1 className="food_name">Jollof Rice</h1>
      <p className="short_description">
        Jollof Rice is a beloved favorite in Nigeria and beyond!The magic of
        egusi soup lies in its essence...
      </p>
      <button className="food_card_button">
        <p>View all</p>
        <RemoveRedEyeOutlinedIcon className="materialeye" />
      </button>
    </div>
  );
}

export default FoodCard;
