import React from "react";
import './user-profile.css';
import {AiOutlineSetting} from "react-icons/ai";
import{IoIosContact} from "react-icons/io";
import face from "../../assests/Ellipse 2.png";
import {AiOutlineMore} from "react-icons/ai";
import {IoIosArrowForward} from "react-icons/io"
import img1 from "../../assests/Rectangle 21.jpg";
import img2 from "../../assests/Rectangle 22.jpg";
import img3 from "../../assests/Rectangle 33.jpg";
import img4 from "../../assests/Rectangle 34.jpg";
import {AiOutlineWhatsApp} from "react-icons/ai";
import {AiOutlineInstagram} from "react-icons/ai";
import {FiFacebook} from "react-icons/fi"
import {AiOutlineTwitter} from "react-icons/ai";





export default function Userprofile(){
    return(
            <>
            <div className="container">
               <div className="first-section-container">
                    <div className="first-width-checker">
                        <header>
                                <nav>
                                    <div>
                                            <h2>
                                            CHOP NAIJA
                                            </h2>  
                                    </div>
                                    <div className="class-list">
                                    <a href="#"><li>Home</li></a>
                                    <a href="#"><li>Categories</li></a>
                                    <a href="#"><li>Blog</li></a>
                                    <a href="#"><li>About</li></a>
                                    <a href="#"><li>Contact Us</li></a>
                                    </div>
                                    <div className="setting-contact">
                                        <AiOutlineSetting />
                                        <IoIosContact />
                                    </div>
                            </nav>
                            </header>
                            <div className="first-container-second-child">
                                <div>
                                    <img src={face} className="face"/>
                                    <span>Chiamaka Udenyi</span>
                                </div>
                                <div>
                                    <span className="text">Saved Collection</span>
                                    <AiOutlineMore />
                                </div>
                            </div>
                            <div className="first-container-third-child">
                                    <div>
                                        <img src={img1}/>
                                        <h4>Delta Delicacies</h4>
                                        <p>9 Recipes</p>
                                    </div>
                                    <div>
                                        <img src={img2}/>
                                        <h4>Delta Delicacies</h4>
                                        <p>9 Recipes</p>
                                    </div>
                                    <div>
                                        <img src={img3}/>
                                        <h4>Delta Delicacies</h4>
                                        <p>9 Recipes</p>
                                    </div>
                                    <div>
                                        <img src={img4}/>
                                        <h4>Delta Delicacies</h4>
                                        <p>9 Recipes</p>
                                    </div>
                            </div>
                            <div className="first-container-last-child">
                                <span>Head to Homepage</span>
                                <IoIosArrowForward className="e"/>
                            </div>
                    </div> 
               </div>
               <div className="second-width-checker">
                    <div className="first-wrapper">
                        <div className="first-child-wrapper">
                            <h1>
                            CHOP NAIJA
                            </h1>
                            <div className="first-childs-child-wrapper">
                                <h4>
                                Stay updated!
                                </h4>
                                <p>
                                Don't miss any more of our fresh recipes <br /> and advice.
                                </p>
                                <input type="text" placeholder="Enter your email address here"/>
                                <p className="sub">
                                Subscribe now!
                                </p>
                            </div>
                        </div>
                            <div>
                                <h4>Home</h4>
                                <p>Categories</p>
                                <p>Blog</p>
                                <p>About Us</p>
                                <p>Contact Us</p>
                            </div>
                            <div>
                                <h4>Category</h4>
                                <p>Rice recipes</p>
                                <p>Soup recipes</p>
                                <p>Plantian recipes</p>
                                <p>Small chops</p>
                            </div>
                            <div>
                                <h4>Recently added</h4>
                                <p>Tuwo Chinkafa</p>
                                <p>Banga soup</p>
                                <p>Ogbono soup</p>
                                <p>Afang soup</p>
                            </div>
                        
                    </div>
                    <div className="footer">
                        <p>follow us</p>
                        <div>
                        <AiOutlineWhatsApp />
                        <AiOutlineInstagram />
                        <FiFacebook />
                        <AiOutlineTwitter />
                        </div>
                    </div>
               </div>
            </div>
        </>
    )
}