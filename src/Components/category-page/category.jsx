import React from "react";
import{IoIosContact} from "react-icons/io";
import{BiLeftArrow} from "react-icons/bi";
import{BiRightArrow} from "react-icons/bi";
import food1 from "../../assests/food1.jpg";
import food2 from "../../assests/food2.jpg";
import food3 from "../../assests/food3.jpg";
import food4 from "../../assests/food4.jpg";
import {AiOutlineSearch} from "react-icons/ai";
import './category.css';

export default function Category(){
    return(
        <>
        <div className=" page-container">
            <div className="first-session-background-image">
                <div className="first-session-width-checker">
                    <nav>
                        <div>
                            <h2>
                            CHOP NAIJA
                            </h2>
                        </div>
                        <div>
                            <a><li>Home</li></a>
                            <a><li>Categories</li></a>
                            <a><li>Blog</li></a>
                            <a><li>About</li></a>
                            <a><li>Contact Us</li></a>
                        </div>
                        <div className="contact-logo">
                            <span>
                                Log in
                            </span>
                        <IoIosContact className="face-logo" />
                        </div>
                    </nav>
                </div>
            </div>
            <div className="second-session">
                <div className="second-child-session">
                    <h2>
                    Popular Categories
                    </h2>
                    <p>
                    You one stop place to easily get any Nigerial dish of your choice prepared,
                    </p>
                </div>
                <div className="third-child-session">
                    <div>
                        <BiLeftArrow/>
                    </div>
                    <div>
                        <img src={food1}/>
                        <p>Rice Recipes</p>
                    </div>
                    <div>
                        <img src={food2}/>
                        <p>Rice Recipes</p>
                    </div>
                    <div>
                        <img src={food3}/>
                        <p>Rice Recipes</p>
                    </div>
                    <div>
                        <img src={food4}/>
                        <p>Rice Recipes</p>
                    </div>
                    <div>
                        <BiRightArrow/>
                    </div>
                </div>
            </div>
            <div>
                <div className="side-bar">
                    <div className="searc-container">
                        <AiOutlineSearch/>
                        <input type="text" placeholder="Search"/>
                    </div>
                    <div>
                        <h2>ByTop Trending</h2>
                        <p>Small Chops</p>
                        <p>Yamarita</p>
                        <p>Ofe Akwu Stwe</p>
                        <p>Ukwa</p>
                    </div>
                    <div>
                        <h2>By Popularity</h2>
                        <p>Jollof Rice</p>
                        <p>Plantain Porridge</p>
                        <p>Fried Rice</p>
                        <p>Chicken Sauce</p>
                    </div>
                    <div>
                        <h2>Ethnic Group</h2>
                        <p>Igbo Recipes</p>
                        <p>Yoruba Recipes</p>
                        <p>Ofe Akwu Stwe</p>
                        <p>All</p>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="category">
                    <div>
                        <h2>Popular Recipes</h2>
                        <h2>View All</h2>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}