import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import axios from 'axios'


const Navbar = ()=>{
    const navitage = useNavigate();

    const handleLogout = ()=>{
        localStorage.removeItem('token');
        navitage('/')
        console.log(localStorage.length)
    }

    return (
        <nav className="navbar">
          <h1 className="navbar-logo">Cinema App</h1>
          <ul className="navbar-links">
            <li><a href="/movies">Películas</a></li>
            <li><button onClick={handleLogout} className="logout-button">Cerrar sesión</button></li>
          </ul>
        </nav>
      );
    };

export default Navbar;