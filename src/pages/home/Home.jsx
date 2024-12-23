import React from 'react';
import Banner from '../../Components/Banner';
import { Outlet } from 'react-router-dom';
import HomeCard from './homeCard/HomeCard';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Outlet></Outlet>
            <HomeCard></HomeCard>
        </div>
    );
};

export default Home;