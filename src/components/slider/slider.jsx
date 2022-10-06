import React, { useEffect, useState } from 'react';
import './slider.css';
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";



let i = 1;
const Slider = () => {
    const [numberActive, setNumberActive] = useState(i);
    const [progWith, setProgWith] = useState(0);

    useEffect(() => {
        const sInterval = setInterval(() => { handelNext() }, 6000)
        return () => {
            clearInterval(sInterval)
        }
    }, [numberActive]);

    useEffect(() => {
        setInterval(() => {
            setProgWith(progWith => progWith + 0.25)
        }, 15)
    }, []);

    useEffect(() => {
        setProgWith(0);
    }, [numberActive])

    const handelNext = () => {
        if (i <= 2) {
            i += 1
        } else if (i === 3) {
            i = 1;
        }
        setNumberActive(i)
    }
    const handelprev = () => {

        if (i > 1) {
            i -= 1
        } else if (i === 1) {
            i = 3;
        }
        setNumberActive(i)
    }


    return (
        <div className="slider">
            <div className="slider-item">
                <div className={`item ${numberActive === 1 ? "avtive" : ""}`}>
                    <div className="img" style={{ background: 'url("./../../images/10.jpg")' }}>
                    </div>
                    <div className="caption">
                        <h1>'از اینجا دسته خالی بیرون نمیری'</h1>
                        <p>'اینجا همه چیز هست و تو نمیتونی دسته خالی بیرون بری'</p>
                    </div>
                </div>
                <div className={`item ${numberActive === 2 ? "avtive" : ""}`}>
                    <div className="img" style={{ background: 'url("./../../images/5.jpg")' }}>
                    </div>
                    <div className="caption">
                        <h1>'از اینجا دسته خالی بیرون نمیری'</h1>
                        <p>'اینجا همه چیز هست و تو نمیتونی دسته خالی بیرون بری'</p>
                    </div>
                </div>
                <div className={`item ${numberActive === 3 ? "avtive" : ""}`}>
                    <div className="img" style={{ background: 'url("./../../images/7.jpg")' }}>
                    </div>
                    <div className="caption">
                        <h1>'از اینجا دسته خالی بیرون نمیری'</h1>
                        <p>'اینجا همه چیز هست و تو نمیتونی دسته خالی بیرون بری'</p>
                    </div>
                </div>

            </div>
            <div className="controls">
                <div className="next" onClick={handelNext}><FaAngleDoubleRight /></div>
                <div className="prev" onClick={handelprev}><FaAngleDoubleLeft /></div>
            </div>
            <div className="progress" style={{ width: `${progWith}` + '%' }}></div>

            <div className="cunterSlide">
                <div className="number-cunt"><h2>{numberActive}/3</h2></div>
                <div className="mini-progres"><div className="mini" style={{ width: `${numberActive == 1 ? "33" : numberActive == 2 ? '66' : '100'}` + '%' }}></div></div>
            </div>
        </div >
    );
}

export default Slider;
