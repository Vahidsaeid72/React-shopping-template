import React, { useState } from 'react';
import './products.css';
import { mainProducts } from './data';
import Aside from './aside';

const Products = () => {
    const [product, setProduct] = useState(mainProducts);

    return (
        <main id="main">
            <div id="content">
                <div className="clothes">
                    <div className="items">
                        {product.womanDress.map((w, index) => (
                            <div key={index + "w"} className="dress-item">
                                <img src={w.image} alt="" />
                                <p>{w.title}</p>
                                <p>{w.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="clothes">
                    <h2>پر فروش های مردانه</h2>
                    <div className="items">
                        {product.menDress.map((m, index) => (
                            <div key={index + "m"} className="dress-item">
                                <img src={m.image} alt="" />
                                <p>{m.title}</p>
                                <p>{m.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="Cosmetics">
                    <img src="./images/product/Cosmetics.jpg" alt="" />
                    <h1>آرایشی و بهداشتی</h1>
                </div>
                <div className="clothes">
                    <h2>پر فروش های زنانه</h2>
                    <div className="items">
                        {product.topWoman.map((tw, index) => (
                            <div key={index + "tw"} className="dress-item woamn-bestseller">
                                <img src={tw.image} alt="" />
                                <p>{tw.title}</p>
                                <p>{tw.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="brand">
                    <h2>برند های برتر</h2>
                    <div className="items">
                        {product.brand.map((br, index) => (
                            <div key={index + "br"} className="brand-item">
                                <img src={br.image} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="clothes">
                    <h2>پر فروش های زنانه</h2>
                    <div className="items">
                        {product.topChildren.map((tc, index) => (
                            <div key={index + "tc"} className="dress-item">
                                <img src={tc.image} alt="" />
                                <p>{tc.title}</p>
                                <p>{tc.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Aside />
        </main>
    );
}

export default Products;
