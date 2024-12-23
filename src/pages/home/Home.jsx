import React from 'react';
import Banner from '../../Components/Banner';
import { Outlet } from 'react-router-dom';
import HomeCard from './homeCard/HomeCard';
import Success from './Success/Succes';
import UnicSection from './Unic/UnicSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Outlet></Outlet>
            <HomeCard></HomeCard>
            <UnicSection></UnicSection>
            <Success></Success>
        </div>
    );
};

export default Home;