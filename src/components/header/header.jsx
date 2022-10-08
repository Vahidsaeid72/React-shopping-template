import React, { useState } from 'react';
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
    FaSearch,
    FaBars,
    FaWindowClose
} from "react-icons/fa";




const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (

        <header>
            <div className="container">
                <div className="navbar">
                    <div className="hamberger" onClick={() => setShowMenu(!showMenu)}>
                        {!showMenu ? <FaBars /> : <FaWindowClose />}
                    </div>
                    <div className={`menu ${showMenu ? 'show-menu' : ""}`} >
                        <ul>
                            <li><a href="/">خانه</a><span><FaHome /></span></li>
                            <li >
                                <a href="/">محصولات</a><span><FaShoppingCart /></span>
                                <ul className="mega-menu">
                                    <li>
                                        <h2>مردانه</h2>
                                        <ul>
                                            <li>کت شلوار</li>
                                            <li>لباس مجلسی</li>
                                            <li>عینک های برند</li>
                                            <li>عطر های محبوب</li>
                                            <li>موزر</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h2>زانانه</h2>
                                        <ul>
                                            <li>لباس های مجلسی</li>
                                            <li>ساعت های برند</li>
                                            <li>عینک های لوکس </li>
                                            <li>کیف مجلسی</li>
                                            <li>عطر های ناب</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h2>بچه گانه</h2>
                                        <ul>
                                            <li>اسباب بازی</li>
                                            <li>ساعت</li>
                                            <li>لباس </li>
                                            <li>کیف</li>
                                            <li>کفش</li>
                                        </ul>
                                    </li>
                                    <li id="mega-menu-pic"><img src="./images/6.jpg" alt="" /></li>
                                </ul>
                            </li>
                            <li><a href="/">سبد خرید</a><span><FaRegCreditCard /></span></li>
                            <li><a href="/">بلاگ</a><span><FaBlog /></span></li>
                            <li><a href="/">درباره ما</a><span><FaAddressCard /></span></li>
                            <li><a href="/">تماس با ما</a><span><FaMobileAlt /></span></li >
                        </ul >
                    </div >
                    <div className="social">
                        <ul>
                            <li><a href="/"><FaFacebookSquare /></a></li>
                            <li><a href="/"><FaTwitterSquare /></a></li>
                            <li><a href="/"><FaInstagram /></a></li>
                            <li>
                                <a href="/"><FaUser /></a>
                                <ul>
                                    <li><a href="/">ثبت نام</a></li>
                                    <h1>/</h1>
                                    <li><a href="/">ورود</a></li>
                                </ul>
                            </li>
                            <li><a href="/"><FaSearch /></a></li>
                        </ul>
                        <button>درخواست محصول</button>
                    </div>
                </div >

            </div >
        </header >

    );
}

export default Header;
