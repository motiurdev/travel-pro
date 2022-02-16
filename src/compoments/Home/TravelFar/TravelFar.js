import React from 'react';
import { Link } from 'react-router-dom';
import './TravelFar.css'

const TravelFar = () => {
    return (
        <div className="travelFar">
            <div className='travelFar-container'>
                <h1 className='pb-5'>TRAVEL FAR ENOUGH, YOU MEET YOURSELF</h1>
                <p className='px-5'>If you want to inspire travellers, content is the right choice! Because People trust organic content more than paid advertising. If you delight the visitors, they will tend to share it with their surroundings. We call it word of mouth, giving you better results than splashing the cash on commercials.</p>
                <Link to="/mybooking" className="services-btn mt-4">My Booking</Link>
            </div>
        </div>
    );
};

export default TravelFar;