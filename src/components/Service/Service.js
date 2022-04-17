import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, price } = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h1>Name:{name}</h1>
            <p>$ :{price}</p>

        </div>
    );
};

export default Service;