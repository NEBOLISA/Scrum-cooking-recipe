import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loginpage from "../login-page/login";
import Signup from "../sign-up-page/sign-up";
import UserProfile from "../user-profile-page/user-profile";
import HomePage from "../../HomePage";
export default function Routing() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/login" element={<Loginpage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}
