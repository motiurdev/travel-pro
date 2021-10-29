import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-content d-flex justify-content-center align-items-center h-100">
                <div className="text-center text-white">
                    <h1 className="display-3 fw-bold">The perfect travel companion</h1>
                    <p className="my-3 fs-4">Simplify the booking experience and control company costs.
                    </p>
                    <button className="banner-btn">Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;