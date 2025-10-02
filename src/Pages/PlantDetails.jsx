import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PlantDetails = () => {
const { id }=useParams()

console.log(id);


const [plant,setPlant]=useState({})
useEffect(()=>{
    fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    .then(res => res.json())
    .then(data=>setPlant(data?.plants))
},[id])
const {name,categoy,price,description,image}= plant


    return (
        <div className="card bg-base-100 max-w-5xl mx-auto shadow-sm">
  <figure className='h-50 overflow-hidden'>
    <img className='w-full h-full object-cover'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <p>Category:{categoy}</p>
    <p>Price:{price}$</p>

    <div className="card-actions justify-end">
      <button className="btn btn-primary">Add to Card</button>
    </div>
  </div>
</div>
    );
};

export default PlantDetails;