import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import app from '../../firebase.init';
import './Service.css'
const auth = getAuth(app);
const Service = ({ service }) => {
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const { name, img, description, price } = service;
    return (

        <div className='service'>
            <img src={img} alt="" />
            <h1>Name:{name}</h1>
            <h2>{description}</h2>
            <h3 className='price'>Price: ${price}</h3>
            <button onClick={handleGoogleSignIn} className='btn'>Click hear</button>
        </div>

    );
};

export default Service;