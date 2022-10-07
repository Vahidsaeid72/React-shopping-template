import React, { useState } from 'react';
import './suggestions.css'
const Suggestions = () => {
    const [suggestions, setSuggestions] = useState();
    return (
        <section id="suggestions">
            <h1>تخفیف فوق العاده</h1>
            <div className="sugest-items">
                <div className="suggest-item">
                    <span>فقط امروز</span>
                    <img src="./images/product/suggest/1.jpg" alt="" />
                    <div className="title-lastPrice">
                        <h4>تی شرت مردانه</h4>
                        <p>450.000</p>
                    </div>
                    <h3>350.000 تومان</h3>
                </div>
                <div className="suggest-item">
                    <span>فقط امروز</span>
                    <img src="./images/product/suggest/2.jpg" alt="" />
                    <div className="title-lastPrice">
                        <h4>ساعت مچی</h4>
                        <p>700.000</p>
                    </div>
                    <h3>500.000 تومان</h3>
                </div>
                <div className="suggest-item">
                    <span>فقط امروز</span>
                    <img src="./images/product/suggest/3.jpg" alt="" />
                    <div className="title-lastPrice">
                        <h4>هد فون</h4>
                        <p>370.000</p>
                    </div>
                    <h3>300.000 تومان</h3>
                </div>
            </div>

        </section>
    );
}

export default Suggestions;
