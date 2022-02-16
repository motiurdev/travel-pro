import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import BestTravel from '../BestTravel/BestTravel';
import ImageGallery from '../ImageGallery/ImageGallery';
import Services from '../Services/Services';
import TravelFar from '../TravelFar/TravelFar';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <BestTravel></BestTravel>
            <TravelFar></TravelFar>
            <ImageGallery></ImageGallery>
            <About></About>
        </div>
    );
};

export default Home;