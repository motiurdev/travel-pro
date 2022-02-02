import React, { useEffect, useState } from 'react';
import footerImage from '../../images/logo.png'
import './Footer.css'

const Footer = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://mighty-thicket-11693.herokuapp.com/allServices')
            .then(res => res.json())
            .then(data => setServices(data.slice(0, 3)))
    }, [])

    return (
        <div className="footer pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        {/* logo */}
                        <img src={footerImage} width="150" alt="" />
                        <p className="me-2" style={{ color: "#bbbbbb" }}>You have chosen the right platform to make it happen. Dream World Travel is one of the leading travel agents in the UK. It has one of the biggest online travel portal, where you can not only search the most suitable flights for your travel destination but also avail other traveling solutions.</p>
                        <div className="social-icon">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-linkedin-in"></i>
                            <i className="fab fa-google-plus-g"></i>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-3">
                        <h4 className="mb-4">Booking</h4>
                        {/* show services */}
                        <div className=" d-flex flex-column bd-highlight mb-3">
                            {
                                services.map(service => (
                                    <div key={service._id} className="row">
                                        <div className="col-md-4">
                                            <img src={service.img} className="img-fluid h-75" width="100" alt="" />
                                        </div>
                                        <div className="col-md-8">
                                            <h6 className="fs-6">{service.name}</h6>
                                            <p className="text-muted">{service.des.slice(0, 30)}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="col-md-3">
                        {/* contact info */}
                        <h4 className="mb-4">Contact</h4>
                        <p className="py-2" style={{ color: "#bbbbbb" }}><i className="fas fa-map-marker-alt header-title fs-5 me-2"></i> Flat 20, Reynolds Neck, North Helenaville, FV77 8WS</p>
                        <p className="py-2" style={{ color: "#bbbbbb" }}><i className="fas fa-phone-alt header-title fs-5 me-2"></i> +2(305) 587-3407</p>
                        <p className="py-2" style={{ color: "#bbbbbb" }}><i className="fas fa-envelope header-title fs-5 me-2"></i> info@travelpro.com</p>
                    </div>
                </div>
            </div>
            <div className="copyright py-3">
                <p className="text-center">Travel Pro © 2021 All Right Reserved</p>
            </div>
        </div>
    );
};

export default Footer;