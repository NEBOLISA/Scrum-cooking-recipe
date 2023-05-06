import React from "react";
import "./FoodCard.css";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { useServiceProviderValue } from "../ServiceProvider";
function FoodCard({ item }) {
  const [{ popularFood }, dispatch] = useServiceProviderValue();
  const tagRegExp = new RegExp("<s*[^>]*>", "g");
  return (
    <React.Fragment>
      <div className="foodcard">
        <img className="food_image" src={item?.image} alt="" />
        <div className="wrapper_div">
          <div className="food_category_name_div">
            <p>{`${item?.title.slice(0, 20)}...`}</p>
          </div>
          <div className="action_btn_div">
            <ShareOutlinedIcon className="materialshare" />
            <FavoriteBorderOutlinedIcon className="materialfav" />
          </div>
        </div>
        <h1 className="food_name">{`${item?.title.slice(0, 30)}...`}</h1>
        <p className="short_description">
          {(item.summary = item.summary.replace(tagRegExp, "")).slice(0, 150)}
        </p>
        <button className="food_card_button">
          <p>View all</p>
          <RemoveRedEyeOutlinedIcon className="materialeye" />
        </button>
      </div>
    </React.Fragment>
  );
}

export default FoodCard;
