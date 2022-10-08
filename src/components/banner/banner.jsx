import React from 'react';
import { FcLibrary } from "react-icons/fc";
import './banner.css';
const Banner = () => {
    return (
        <div className="ads">
            <div className="container">
                <div className="myRow">
                    <div className="banner">
                        <img src="./images/nav-banner.png" alt="" />
                    </div>
                    <div className="logo">
                        <img src="./images/thisLogo.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
