import React from 'react';
import './header.css'
import {
    FaHome
    , FaShoppingCart
    , FaRegCreditCard
    , FaBlog
    , FaAddressCard
    , FaMobileAlt
    , FaFacebookSquare
    , FaTwitterSquare
    , FaInstagram,
    FaUser,
    FaSearch
} from "react-icons/fa";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="navbar">
                    <div className="menu">
                        <ul>
                            <li><a href="/">خانه</a><span><FaHome /></span></li>
                            <li><a href="/">محصولات</a><span><FaShoppingCart /></span></li>
                            <li><a href="/">سبد خرید</a><span><FaRegCreditCard /></span></li>
                            <li><a href="/">اخرین مطالب</a><span><FaBlog /></span></li>
                            <li><a href="/">درباره ما</a><span><FaAddressCard /></span></li>
                            <li><a href="/">تماس با ما</a><span><FaMobileAlt /></span></li >
                        </ul >
                    </div >
                    <div className="social">
                        <ul>
                            <li><a href="/"><FaFacebookSquare /></a></li>
                            <li><a href="/"><FaTwitterSquare /></a></li>
                            <li><a href="/"><FaInstagram /></a></li>
                            <li><a href="/"><FaUser /></a></li>
                            <li><a href="/"><FaSearch /></a></li>
                        </ul>
                        <button>درخواست محصول</button>
                    </div>
                </div >
                <div className="ads">

                </div>
            </div >
        </header >
    );
}

export default Header;
