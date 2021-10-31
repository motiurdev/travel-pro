import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-content d-flex justify-content-center align-items-center h-100">
                <div className="text-center text-white">
                    <h1 className="display-3 fw-bold">The perfect travel companion</h1>
                    <p className="my-4 fs-4">Simplify the booking experience and control company costs.
                    </p>
                    <Link to="/mybooking" className="banner-btn">My Booking</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;