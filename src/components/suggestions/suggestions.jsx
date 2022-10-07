import React, { useState } from 'react';
import './suggestions.css'
const Suggestions = () => {
    const [suggestions, setSuggestions] = useState([{
        title: "تی شرت مردانه",
        lastPrice: "450.000",
        price: "350.000 تومان",
        image: "./images/product/suggest/1.jpg"
    }, {
        title: "ساعت مچی",
        lastPrice: "700.000",
        price: "500.000 تومان",
        image: "./images/product/suggest/2.jpg"
    }, {
        title: "هدفون",
        lastPrice: "370.000",
        price: "300.000 تومان",
        image: "./images/product/suggest/3.jpg"
    }]);
    return (
        <section id="suggestions">
            <h1>تخفیف فوق العاده</h1>
            <div className="sugest-items">
                {suggestions.map((item, index) => (
                    <div key={index + "item"} className="suggest-item">
                        <span>فقط امروز</span>
                        <img src={item.image} alt="" />
                        <div className="title-lastPrice">
                            <h4>{item.title}</h4>
                            <p>{item.lastPrice}</p>
                        </div>
                        <h3>{item.price}</h3>
                    </div>
                ))}

            </div>

        </section>
    );
}

export default Suggestions;
