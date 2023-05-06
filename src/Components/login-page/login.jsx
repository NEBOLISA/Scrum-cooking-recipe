import React from "react";
import NavBar from "../nav-bar-log-sign";
import images from "../../assests/icons8-google-48.png";
import line from "../../assests/Lines.png";
import { Link } from "react-router-dom";

export default function Loginpage() {
  return (
    <>
      <div className="first-login">
        <NavBar />
        <div className="width-checker">
          <div className="body">
            <h2>sign up</h2>
            <div className="google-title">
              <img src={images} alt="images" />
              <span>Sign in with Google</span>
            </div>
            <div className="dash">
              <img src={line} alt="line-1" />
              <span> or </span>
              <img src={line} alt="line-1" />
            </div>
            <div className="form-folder">
              <form>
                <div>
                  <label>Full name*</label>
                  <input type="text" placeholder="Enter your full name here" />
                </div>
                <div>
                  <label>Email*</label>
                  <input type="text" placeholder="Enter your full name here" />
                </div>
                <div>
                  <label>Password*</label>
                  <input type="text" placeholder="Create a password" />
                  <p>Must be at least 8 characters long</p>
                </div>
              </form>
              <div className="btn">
                <Link to="/homepage" className="link">
                  <button> Sign up</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
