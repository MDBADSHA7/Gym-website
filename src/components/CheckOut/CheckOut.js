import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import app from '../../firebase.init'
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import './CheckOut.css'

const auth = getAuth(app);
const CheckOut = () => {
    const [user, setUser] = useState({});
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
            .catch(error => {
                console.log(error)
            })
    }
    const navigateLogIn = event => {
        Navigate('/register');
    }
    return (
        <div className='checkout-container'>
            <button className='Check-btn' onClick={handleGoogleSignIn}>CheckOut</button>
            <br />

            <p className='question'>Already ChackOut?<Link to="/login" className='login-btn' onclick={navigateLogIn}>Please LogIn</Link></p>
            <h2 className='name'>My Name:{user.displayName}</h2>
            <img className='w-100 mx-auto p-20' src={user.photoURL} alt="" />
        </div>
    );
};

export default CheckOut;