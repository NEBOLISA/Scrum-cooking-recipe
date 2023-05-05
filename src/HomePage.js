import React from "react";
import "./HomePage.css";
import SearchBar from "./Components/SearchBar";
import FoodCard from "./Components/FoodCard";
import Header from "./Components/Header";
import FirstSection from "./Components/FirstSection";
import PopularCategories from "./Components/PopularCategories";

function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <FirstSection />
      <PopularCategories />
    </div>
  );
}

export default HomePage;
