import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/login">LogIn</Link>
                <Link to="/logout">LogOut</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/aboutme">About Me</Link>
            </nav>
        </div>
    );
};

export default Header;