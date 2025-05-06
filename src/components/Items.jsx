import React from 'react';
import customimg from '../assets/customimg.jpeg';

const Items = ({ title, price, description, src, rating }) => {
  return (
    <div className="card" style={{maxWidth:'350px',height:'500px', margin: '20px' }}>
      <img src={src ? src : customimg} className="card-img-top my-2 mx-3" style={{maxHeight:'200px' ,maxWidth:'300px'}} alt="..." />
      <div className="card-body">
        <h2 className='text-secondary'>{title.slice(0,20)}</h2>
        <p className="card-text">{description.slice(0,100)}</p>
        <p className="card-text text-success"><strong className="text-dark">Price:</strong> ${price}</p>
        <p className="card-text"><strong >Rating:</strong> {rating?.rate} ({rating?.count} reviews)</p>
      </div>
    </div>
  );
};

export default Items;


