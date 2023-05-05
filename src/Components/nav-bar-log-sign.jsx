import React from "react";
import './login-page/login.css';
import {IoIosContact} from 'react-icons/io'


export  default function NavBar(){

    return(
        <>
        <div className="bk-color">
            <div className="bk-weight">
                <div className="flec-1">
                <div className="logo">
                    CHOP NAIJA
                </div>
                <div className="flec-2">
                    <span>Already have an account?</span>
                    <button className="btn-1">
                       <span className="login">login</span>
                        <IoIosContact className="icon"/>
                    </button>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}