import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const { name, img, description, price } = service;
    const navigate = useNavigate();
    const navigateRegister = event => {
        navigate('/register');
    }

    return (
        <div className='container'>
            <div> <img src={img} alt="" />
                <h1>Name:{name}</h1>
                <h2>{description}</h2>
                <h3 className='price'>Price: ${price}</h3>
                < Link to="/checkout" className='btn' onclick={navigateRegister} > Click hear</Link >
            </div>
        </div >
    );
};

export default Service;