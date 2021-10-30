import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Services.css"

const Services = () => {
    const [services, setServices] = useState([])
    const [isLoading, setIsLading] = useState(true)

    useEffect(() => {
        setIsLading(true)
        fetch("http://localhost:5000/allServices")
            .then(res => res.json())
            .then(data => setServices(data))
            .finally(() => {
                setIsLading(false)
            })
    }, [])



    return (
        <div>
            {
                isLoading ? (<Spinner animation="border" variant="success" className="d-block mx-auto mt-5" />) :
                    (<div className="container">
                        <h1 className="text-center py-5 header-title">Our Services</h1>
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {
                                services.map(service => (
                                    <div className="col" key={service._id}>
                                        <div className="card h-100">
                                            <img src={service.img} className="card-img-top service-img" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{service.name}</h5>
                                                <p className="card-text">{service?.des.slice(0, 100)}</p>
                                                <h5 className="mb-4">${service.price}</h5>
                                                <Link to={`/bookingDetail/${service._id}`} className="regular-btn">Booking now <i className="fas fa-arrow-circle-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Services;