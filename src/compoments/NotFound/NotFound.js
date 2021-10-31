import React from 'react';
import { Link } from 'react-router-dom';
import pageNotFound from '../../images/page-not-found.svg'

const NotFound = () => {
    return (
        <div className="container text-center py-5">
            <img src={pageNotFound} alt="" className="w-50" />
            <h1 className="header-title py-3">Page Not Found</h1>
            <Link to="/home" className="regular-btn">Back Home</Link>
        </div>
    );
};

export default NotFound;