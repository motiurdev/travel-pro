import React from 'react';
import pageNotFound from '../../images/page-not-found.svg'

const NotFound = () => {
    return (
        <div className="container text-center py-5">
            <img src={pageNotFound} alt="" className="w-50" />
            <h1 className="header-title py-3">Page Not Found</h1>
        </div>
    );
};

export default NotFound;