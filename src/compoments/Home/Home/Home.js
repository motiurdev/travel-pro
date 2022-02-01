import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import ImageGallery from '../ImageGallery/ImageGallery';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ImageGallery></ImageGallery>
            <About></About>
        </div>
    );
};

export default Home;