import React from "react";
import { useRef } from "react";
import "./NavBar.css";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

function NavBar() {
  /*const navRef = useRef();**/
  const showNavBar = () => {
    /*navRef.current.classList.toggle("responsive_nav");**/
  };
  return (
    <div className="navbar">
      <div className="left_nav">
        <p className="app_name">Chop Naija</p>
      </div>
      <div className="middle_nav">
        <ul>
          <li>
            {" "}
            <a className="active" href="#">
              Home{" "}
            </a>
          </li>

          <li>
            <a href="#">Categories </a>
          </li>

          <li>
            <a href="#">Blog </a>
          </li>

          <li>
            <a href="#">About </a>
          </li>

          <li>
            {" "}
            <a href="#">Contact Us </a>
          </li>
        </ul>
      </div>
      <div className="right_nav">
        <Link to="/signup" className="link">
          <div className="login_button_div">
            <p>Log In</p>
            <AccountCircleOutlinedIcon className="account_icon" />
          </div>
        </Link>
      </div>
      {/*
      <button className="nav_btn nav-close-btn" onClick={showNavBar}>
        <CloseOutlinedIcon />
      </button>**/}
      <button className="nav_btn" onClick={showNavBar}>
        <MenuOutlinedIcon />
      </button>
    </div>
  );
}

export default NavBar;
