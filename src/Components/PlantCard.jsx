import React from 'react';

const PlantCard = ({plant}) => {
    const{name,image,category,price}=plant
    return (
    <div className="card bg-base-100 w-96 shadow-sm">
  <figure className='h-48'>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Category:{category}</p>
    <p>Price:{price}$</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
    );
};

export default PlantCard;