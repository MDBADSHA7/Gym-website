import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }
    const handleRegister = event => {
        event.preventDefault();
    }
    return (
        <div className='Register-form'>
            <h1 style={{ textAlign: 'center' }}>Please Register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <br />
                <input type="email" name="email" id="" placeholder='Email Address' required />
                <br />
                <input type="password" name="" id="" placeholder='Your Password' required />
                <input type="submit" value="Register" />

            </form>
            <p>Already have an account?<Link to="/login" className='text-danger pe-auto text-decoration-none' onclick={navigateLogin}> Please Login</Link></p>
        </div>
    );
};

export default Register;