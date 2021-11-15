
import React from 'react';
import Banner from '../Banner/Banner';
import DisplayReviews from '../DisplayReviews/DisplayReviews';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <DisplayReviews></DisplayReviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;