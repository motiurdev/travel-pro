import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Services.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Services = () => {
    const [services, setServices] = useState([])
    const [isLoading, setIsLading] = useState(true)

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    // fetch services data
    useEffect(() => {
        setIsLading(true)
        fetch("https://mighty-thicket-11693.herokuapp.com/allServices")
            .then(res => res.json())
            .then(data => setServices(data))
            .finally(() => {
                setIsLading(false)
            })
    }, [])



    return (
        <div className='py-5'>
            {
                isLoading ? (<Spinner animation="border" variant="success" className="d-block mx-auto mt-5" />) :
                    (<div className="container">

                        <div className="row">
                            {/* show services in ui */}
                            <div className="col-md-4">
                                <h1 className="header-title places-effect">Best Tour Places</h1>
                                <p className='text-secondary mt-4 pe-1 text-justify'>From high guest ratings to attention to detail, it takes stringent quality standards to be included among our collection of VIP Access properties. Staying at one of these places is even more rewarding for Expedia Rewards members, with special perks and extra Rewards points—or 4x points when you book on the app. Need a little help picking your next great vacation destination? Keep scrolling to explore a mix of classics and hidden gems sprinkled across the globe. Please remember to check government advisories before booking and traveling.</p>
                                <Link to="/mybooking" className="services-btn">My Booking</Link>
                            </div>
                            <div className="col-md-8">
                                <Carousel responsive={responsive}>
                                    {
                                        services.map(service => (
                                            <div className="col mx-2" key={service._id}>
                                                <div className="card h-100">
                                                    <img src={service.img} className="card-img-top service-img" alt="..." />
                                                    <div className="card-body">
                                                        <h5 className="card-title header-title">{service.name}</h5>
                                                        <p className="card-text text-muted">{service?.des.slice(0, 110)}</p>
                                                        <h5 className="mb-4">${service.price}</h5>
                                                        {/* Booking button */}
                                                        <Link to={`/bookingDetail/${service._id}`} className="regular-btn">Booking now <i className="fas fa-arrow-circle-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </Carousel>
                            </div>
                        </div>
                    </div>)
            }
        </div >
    );
};

export default Services;


