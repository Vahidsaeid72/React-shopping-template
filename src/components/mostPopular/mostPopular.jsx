import React from 'react';
import './mostPopular.css';
import { FaRegEye, FaHeart } from "react-icons/fa";

const MostPopular = () => {
    return (
        <div id="mostPopular">
            <div className="populars">
                <div className="populars-item">
                    <img src="./images/product/men/1.jpg" alt="" />
                    <div className="statistics">
                        <span className="statistics-veiw">
                            <p>8000 بازدید</p>
                            <span><FaRegEye /></span>
                        </span>
                        <span className="statistics-like">
                            <p>750</p>
                            <span><FaHeart /></span>
                        </span>
                    </div>
                </div>
                <div className="populars-item">
                    <img src="./images/product/men/2.jpg" alt="" />
                    <div className="statistics">
                        <span className="statistics-veiw">
                            <p>16000 بازدید</p>
                            <span><FaRegEye /></span>
                        </span>
                        <span className="statistics-like">
                            <p>1500</p>
                            <span><FaHeart /></span>
                        </span>
                    </div>
                </div>
                <div className="populars-item">
                    <img src="./images/product/men/3.jpg" alt="" />
                    <div className="statistics">
                        <span className="statistics-veiw">
                            <p>12000 بازدید</p>
                            <span><FaRegEye /></span>
                        </span>
                        <span className="statistics-like">
                            <p>900</p>
                            <span><FaHeart /></span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="populars-title"><h1>محبوب ترین محصولات</h1></div>
        </div>
    );
}

export default MostPopular;
