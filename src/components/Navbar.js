import React from "react";
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="logo">Elif's News App</Link>
            <Link to="/Search" className="search-link">Search</Link>
        </nav>
    );
};

export default Navbar; 