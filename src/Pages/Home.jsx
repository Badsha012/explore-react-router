import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


const Home = () => {
 const [Plants,setPlants] =useState([])
 useEffect(()=>{
    fetch('https://openapi.programming-hero.com/api/plants')
    .then(res => res.json())
    .then(data => setPlants(data?.plants));
  
 }, [])
console.log(Plants);

    return (
        <div>
            <p>Welcome Home</p>
            <p>Plant Card</p>
            {
                Plants.map(plant=>{
                  return <p key={plant.id}>{plant.name}</p>
                })
            }

        </div>
    );
};

export default Home;