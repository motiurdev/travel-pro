import React from 'react';
import mapImage from '../../images/map.jpg'

const Contact = () => {
    return (
        <div className='container py-5'>
            <div className='text-center'>
                <div className="row gx-5">
                    <div className="col-12 col-md-4">
                        <div className='rounded shadow py-5'>
                            <h4 className='header-title'>Email:</h4>
                            <p className='text-secondary'>safetravel@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className='rounded shadow py-5'>
                            <h4 className='header-title'>Phone:</h4>
                            <p className='text-secondary'>+601255698852</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className='rounded shadow py-5'>
                            <h4 className='header-title'>Address:</h4>
                            <p className='text-secondary'>New York, US</p>
                        </div>
                    </div>
                </div>
                <div className='py-5'>
                    <img src={mapImage} alt="" className='w-100' />
                </div>
            </div>
        </div>
    );
};

export default Contact;