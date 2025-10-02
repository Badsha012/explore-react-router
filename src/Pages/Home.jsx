import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <main className='min-h-[calc(100vh-287px)]'>Welcome my home pages</main>

            <Footer></Footer>
        </div>
    );
};

export default Home;