import React from 'react';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;

// it's nothing but a container component

// 1. banner is done with react bootstrap
// 2. services is done with media query
// 3. experts is done with normal bootstrap