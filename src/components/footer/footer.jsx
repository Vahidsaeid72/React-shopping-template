import './footer.css';
import React from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaInstagram, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-top">
                    <div className="foter-aboutUs">
                        <h3>درباره ما</h3>
                        <p>لورم ایپسوم یا طرح‌نما  به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از  برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید،  چگونگی نوع و اندازه فونت و ظاهر متن باشد.</p>
                    </div>
                    <div className="foter-socials">
                        <h3>دنبال کنید</h3>
                        <ul className="foter-socials-items">
                            <li><a href="/"><FaFacebookSquare /></a></li>
                            <li><a href="/"><FaTwitterSquare /></a></li>
                            <li><a href="/"><FaInstagram /></a></li>
                            <li><a href="/"><FaLinkedin /></a></li>
                            <li><a href="/"><FaYoutubeSquare /></a></li>
                        </ul>
                    </div>
                    <div className="foter-latestNews">
                        <h3>دریافت اخرین اخبار</h3>
                        <form>
                            <input type="text" placeholder="ایمیل شما" />
                            <button>ارسال</button>
                        </form>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="foter-services">
                        <h3>خرمات مشتریان</h3>
                        <h5>پرسش های متداول</h5>
                        <h5>حریم خصوصی</h5>
                        <h5>گارانتی بازگشت وجه</h5>
                        <h5>شرایط استفاده</h5>
                    </div>
                    <div className="foter-withUs">
                        <h3>با ما</h3>
                        <h5>تماس با ما</h5>
                        <h5>درباره ما</h5>
                        <h5>فروش در سایت</h5>
                        <h5>اخبار سایت</h5>
                    </div>
                    <div className="foter-address">
                        <h4>نیشابور خیابان بعثت 32 بعثت ساختمان بهشت پلاک 68</h4>
                        <div className="email-number">
                            <h4>شماره تماس:09921790833</h4>
                            <h4>ایمیل:vahid.sd.programmer@gmail.com</h4>
                        </div>
                        <div className="symbols">
                            <img src="./images/f1.png" alt="" />
                            <img src="./images/f2.png" alt="" />
                            <img src="./images/f3.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
