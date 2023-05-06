import React from "react";
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Loginpage from "../login-page/login";
import Signup from "../sign-up-page/sign-up";
import UserProfile from "../user-profile-page/user-profile";
import Category from "../category-page/category";
export default function Routing (){
    return(
        <>
        <div>
            <Router>
                <Routes>
                    <Route path = "/" element = {<Loginpage/>} />
                    <Route path = "/signup" element = {<Signup/>} />
                    <Route path = "/userprofile" element = {<UserProfile/>} />
                    <Route path = "/category" element = {<Category/>} />

                </Routes>
            </Router>
        </div>
        </>
    )
}