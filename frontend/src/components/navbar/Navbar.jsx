import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import axios from 'axios'


const Navbar = ()=>{
    const navitage = useNavigate();

    const handleLogout = ()=>{
        localStorage.removeItem('token');
        navitage('/')
        //console.log(localStorage.length)
    }

    return (
        <nav className="navbar">
          <h1 className="navbar-logob">Cinema App</h1>
          <Link to="/movies" className="navbar-links">Películas en función</Link>
          <ul className="navbar-links">
            <li><button onClick={handleLogout} className="logout-button">Cerrar sesión</button></li>
          </ul>
        </nav>
      );
    };

export default Navbar;