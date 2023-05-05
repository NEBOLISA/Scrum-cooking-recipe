import React, { useState } from "react";
import "./PopularCategories.css";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import FoodPlate from "./FoodPlate";
import Slider from "react-slick";

function PopularCategories() {
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="popularcategories">
      <h1>Popular Categories</h1>
      <h3>
        You one stop place to easily get any Nigerial dish of your choice
        prepared,
      </h3>
      <div className="categories_wrapper">
        <div className="slider_btn">
          <div className="slider_div" onClick={sliderRef?.slickPrev}>
            <ChevronLeftOutlinedIcon className="prev" />
          </div>
          <div className="slider_div " onClick={sliderRef?.slickNext}>
            <ChevronRightOutlinedIcon className="next" />
          </div>
        </div>
        <div className="foodplate_div">
          <Slider ref={setSliderRef} {...sliderSettings}>
            <FoodPlate />
            <FoodPlate />
            <FoodPlate />
            <FoodPlate />
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default PopularCategories;
