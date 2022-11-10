import React from 'react';
import useTitle from '../../../hooks/useTitle';
import AboutMe from '../AboutMe/AboutMe';
import MyServices from '../MyServices/MyServices';
import Subscribe from '../Subscribe/Subscribe';
import './Home.css';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <div className='home text-center flex justify-center items-center mb-20'>
                <h2 className='text-6xl text-white font-semibold font-mono'>Welcome to <span className='text-warning'>Davids Burger</span></h2>
            </div>
            <MyServices></MyServices>
            <AboutMe></AboutMe>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;