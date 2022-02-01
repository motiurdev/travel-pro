import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-content d-flex justify-content-center align-items-center h-100">
                <div className="text-center text-white">
                    <h1 className="display-3 fw-bold">The perfect travel companion</h1>
                    <p className="mt-2 mb-4 fs-4">Simplify the booking experience and control company costs.
                    </p>
                    <Link to="/about" className="banner-btn">About Us</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;