import React, { useEffect, useState } from "react";
import "./HomePage.css";
import SearchBar from "./Components/SearchBar";
import FoodCard from "./Components/FoodCard";
import Header from "./Components/Header";
import FirstSection from "./Components/FirstSection";
import PopularCategories from "./Components/PopularCategories";
import axios from "axios";
import { useServiceProviderValue } from "./ServiceProvider";

function HomePage() {
  const [{ popularFood }, dispatch] = useServiceProviderValue();
  const [food, setFood] = useState("");
  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=b6da314e14d74d4b8bf75af9d9fd9825&number=3`
    );
    const data = await api.json();
    dispatch({ type: "SET_POPULAR_FOOD", popularFood: data });
    console.log(data);
  };
  useEffect(() => {
    getPopular();
    console.log(food);
  }, []);

  return (
    <div className="homepage">
      <Header />

      <FirstSection />
      <PopularCategories />
    </div>
  );
}

export default HomePage;
