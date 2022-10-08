import React, { useState } from 'react';
import { asideProduct } from './data';
import './aside.css';

const Aside = () => {
    const [myData, setMyData] = useState(asideProduct)

    return (
        <aside id="aside">
            <div className="mySection">
                <h2>اخرین محصولات</h2>
                <div className="aside-item">
                    {myData.latestProducts.map((last, index) => (
                        <div key={index + "last"} className="my-item">
                            <img src={last.image} alt="" />
                            <p>{last.title}</p>
                            <p>{last.price}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mySection">
                <h2>محصولات پر فروش اخیر</h2>
                <div className="aside-item">
                    {myData.bestSellers.map((bs, index) => (
                        <div key={index + "bs"} className="my-item">
                            <img src={bs.image} alt="" />
                            <p>{bs.title}</p>
                            <p>{bs.price}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mySection">
                <h2>لپ تاپ</h2>
                <div className="aside-item">
                    {myData.laptop.map((lap, index) => (
                        <div key={index + "lap"} className="my-item">
                            <img src={lap.image} alt="" />
                            <p>{lap.title}</p>
                            <p>{lap.price}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bottom-baner">
                <img src="./images/product/banner-ads.jpg" alt="" />
            </div>
        </aside>
    );
}

export default Aside;
