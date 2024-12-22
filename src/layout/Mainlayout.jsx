import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../common/Navbar';

const Mainlayout = () => {
    return (
        <div className='mx-auto max-w-7xl'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;