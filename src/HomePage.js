import React, { useEffect, useState } from "react";
import "./HomePage.css";
import SearchBar from "./Components/SearchBar";
import FoodCard from "./Components/FoodCard";
import Header from "./Components/Header";
import FirstSection from "./Components/FirstSection";
import PopularCategories from "./Components/PopularCategories";
import axios from "axios";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useServiceProviderValue } from "./ServiceProvider";
import { Input } from "@mui/material";

function HomePage() {
  const [{ popularFood }, dispatch] = useServiceProviderValue();
  const [food, setFood] = useState("");

  const getRecipe = async () => {
    const response = await axios.get(
      `	https://food-recipes-dwor.onrender.com/api/v1/recipes`,
      {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY0NTVkMDFhZjc1NzQwMTAyY2IzOGM2NyIsIm5hbWUiOiJ0ZXN0IGZvbyIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQwOSRQNVV2cjJ5RnZ1TFhkSDNwbEkzUlcuTVJtZVRWdUd1aE9VNlhhZklYMFc4RmdnUnd3QnB6ZSIsInByb2ZpbGVQaWN0dXJlIjoiaHR0cHM6Ly9hcGkuZGljZWJlYXIuY29tLzUueC9sb3JlbGVpLW5ldXRyYWwvc3ZnP3NlZWQ9dGVzdC0yOWNqeS1nbWFpbC0zemJ3Mi1jb20mc2l6ZT0yMDAmcmFkaXVzPTUwIiwicm9sZSI6InZpc2l0b3IiLCJjcmVhdGVkQXQiOiIyMDIzLTA1LTA2VDAzOjU3OjE0LjU0OVoiLCJ1cGRhdGVkQXQiOiIyMDIzLTA1LTA2VDAzOjU3OjE0LjU0OVoiLCJfX3YiOjB9LCJpYXQiOjE2ODMzNDU0NTQsImV4cCI6MTY4MzQzMTg1NH0.R0HeZICfFIU3ktdt3PCDhWV4tVidfaGynPhIUpFap6s",
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);

    /* dispatch({
      type: "DEFAULT_PLAYLIST",
      playlistName: response.data.items[1].name,
    });*/
  };

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=b6da314e14d74d4b8bf75af9d9fd9825&number=3`
    );
    const data = await api.json();
    dispatch({ type: "SET_POPULAR_FOOD", popularFood: data });
    console.log(data);
  };
  useEffect(() => {
    getRecipe();
    getPopular();
    console.log(food);
  }, []);

  return (
    <div className="homepage">
      <Header />

      <FirstSection />
      <PopularCategories />
      <footer>
        <h1 className="title">chop naija</h1>
        <div className="down_part">
          <div className="take_action_div">
            <h2>Stay updated!</h2>
            <p className="first">
              Don't miss any more of our fresh recipes and advice.
            </p>
            <p>Subcribe to our newsletter!</p>
            <div className="send_div">
              <Input type="text" placeholder="Enter your email address here" />
              <button>Subscribe Now</button>
            </div>
          </div>
          <div className="links">
            <ul>
              <h2 className="links_titles">Home</h2>
              <li>
                <a href="">Categories</a>
              </li>
              <li>
                <a href="">Blog </a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <div className="social_div">
                <p>Follow Us</p>
                <div className="social_icons">
                  <FacebookIcon />
                  <YouTubeIcon />
                  <TwitterIcon />
                  <WhatsAppIcon />
                  <InstagramIcon />
                </div>
              </div>
            </ul>
            <ul>
              <h2 className="links_titles">Category</h2>
              <li>
                <a href="">Rice Recipes</a>
              </li>
              <li>
                <a href="">Soup Recipes</a>
              </li>
              <li>
                <a href=""> Plaintain recipes</a>
              </li>
              <li>
                <a href="">Small Chops</a>
              </li>
            </ul>
            <ul>
              <h2 className="links_titles">Recently added</h2>
              <li>
                <a href="">Tuwo Shinkafa</a>
              </li>
              <li>
                <a href="">Banga Soup</a>
              </li>
              <li>
                <a href="">Ogbono soup</a>
              </li>
              <li>
                <a href="">Afang soup</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
