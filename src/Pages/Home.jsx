import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


const Home = () => {
 const [plants,setPlants] =useState([])
 useEffect(()=>{
    fetch('https://openapi.programming-hero.com/api/plants')
    .then(res => res.json())
    .then(data => setPlants(data?.plants));
  
 }, [])
console.log(plants);

    return (
        <div>
            <p>Welcome Home</p>
            <p>Plant Card</p>
            {
                plants.map(plant=>{
                    <p>{plant.name}</p>
                })
            }

        </div>
    );
};

export default Home;