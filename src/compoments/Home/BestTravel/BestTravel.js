import React from 'react';
import aboutImg from '../../../images/about1.jpg'

const BestTravel = () => {
    return (
        <div className='container'>
            <div className="row mt-3 py-5 mb-5">
                <div className="col-md-6">
                    <img src={aboutImg} className="img-fluid rounded pe-4" alt="" />
                </div>
                <div className="col-md-6">
                    <h2 className="header-title mb-5 pt-2">Best Travel Agency London, UK | Travel Agent
                    </h2>
                    <p className="text-muted">Established in 2006, Travel Pro Ltd. is one of the UK’s leading independent travel agencies. Known to our customers as one of the best travel agency London, we hold long standing and robust trade relationships with all major airlines, specialist airfare consolidators, tour operators,hotels and accommodation wholesalers. As a well-established, respected, and professional travel agency in London, United Kingdom. Dream World Travel Ltd. excels at sourcing and supplying cheap flight tickets to international destinations worldwide encompassing USA, Canada, Caribbean, Central America, South America, Europe, South Asia, Far East Asia, Indian subcontinent and Middle East, Africa, Australia, New Zealand, Pacific Islands, and all UK domestic flights.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BestTravel;