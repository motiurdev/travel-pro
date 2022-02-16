import React from 'react';
import about1Img from '../../../images/about1.jpg'
import appImg from '../../../images/app.png'
import appStore from '../../../images/google-play-badge.png'
import qrScreen from '../../../images/qr-screen.png'
import appleImg from '../../../images/apple.png'

const About = () => {
    return (
        <div className="container py-3">
            <div className="row py-5 mt-5">
                <div className="col-md-6 pe-5 pt-4">
                    <h2 className="header-title mb-4 pt-2">Travel Pro holidays</h2>
                    <p className="text-muted">Fun, comfort, and all-inclusive luxury. Club Med is all about hassle-free holidays with the ones you love most. And there are dozens of different resorts to choose from: whether you’re after lazy days on a sun-drenched beach or exhilarating runs down a snow-capped slope, Club Med has just the place for you and your family. Once you’ve found your dream destination, you can relax knowing that everything is paid for. The kids can rush off to the waterslides or zipline through the treetops while you sunbathe on a deckchair with a drink from the open bar. </p>
                </div>
                <div className="col-md-6">
                    <img src={about1Img} className="img-fluid rounded" alt="" />
                </div>
            </div>

            <div className="row py-5 mt-5">
                <div className="col-md-6">
                    <img src={appImg} className="img-fluid rounded pe-3" width="400" alt="" />
                </div>
                <div className="col-md-6 pt-4 mt-3">
                    <h2 className="header-title mb-4 pt-2">Download our free app</h2>
                    <p className="text-muted">Search, book and chat to us on the go, while managing your entire trip from your phone. Or to stay inspired until your next trip with free travel videos.</p>
                    <div className="d-flex align-items-end">
                        <div><img src={appleImg} className="img-fluid me-3 mt-5" width="150px" alt="" /></div>
                        <div><img src={appStore} className="img-fluid me-3" width="150px" alt="" /></div>
                        <div> <img src={qrScreen} className="img-fluid" width="80px" alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;