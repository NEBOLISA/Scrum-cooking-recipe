import React from "react";
import NavBar from "../nav-bar-log-sign";
import './sign-up.css';
import { Button } from "@mui/material";

export default function Signup(){


    return(
        <>
        <div className ="sign-up">
            <NavBar/>
           <div className="sign-up-cover">
            <div className="sign-up-body">
                <h2>
                    Log in
                </h2>
                <div className="input-details">
                    <div>
                        <label htmlFor="">Email*</label>
                        <input type="text" placeholder="Enter your email here" />
                    </div>

                    <div>
                        <label htmlFor="">Password*</label>
                        <input type="text" placeholder="Enter your password" />
                    </div>
                </div>
                <div className="btn-comp">
                <button> Log in</button>
                </div>
                </div>
           </div>
        </div>
        </>
    )
}