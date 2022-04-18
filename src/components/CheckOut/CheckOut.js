import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import app from '../../firebase.init';
import { useState } from 'react'
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
    const navigateRegister = event => {
        Navigate('/register');
    }
    return (
        <div>
            <button className='Check-btn' onClick={handleGoogleSignIn}>CheckOut</button>
            <br />
            <Link to="/login" className='login-btn' onclick={navigateRegister}>Please LogIn</Link>
            <h2 className='name'>My Name:{user.displayName}</h2>
            <img src={user.photoURL} alt="" />
        </div>
    );
};

export default CheckOut;