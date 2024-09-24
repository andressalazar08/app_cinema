import React, { useState, useEffect } from 'react';
import { getMovies } from '../../api';
import './Movies.css';
import Navbar from '../navbar/Navbar'; 

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies();
      setMovies(data);
    };
    fetchMovies();
  }, []);

  return (
    <>
    <Navbar></Navbar> 
    <div className="movies-container">
      
    <h1>Listado de Películas</h1>
    <div className="movie-list">
      {movies.map((movie) => (
        <div className="movie-card" key={movie.id}>
          {/* <img src={movie.image_url} alt={movie.titulo} className="movie-image" /> */}
          <img 
      //src='https://imgc.allpostersimages.com/img/posters/dc-comics-the-dark-knight-batman-logo-on-fire-one-sheet-premium-poster_u-L-F9TM6L0.jpg'
      src={movie.image_url}
      alt={movie.titulo} 
      className="movie-image" 
      onError={(e) => { e.target.src = 'https://via.placeholder.com/300'; }} // Por si hay un error en la URL
    />
          <h2>{movie.titulo}</h2>
          <h2>{movie.image_url}</h2>
          <p>Año: {movie.anio}</p>
          <p>Duración: {movie.duracion} minutos</p>
          <p>Rating: {movie.rating}/5</p>
          <p>prueba</p>
        </div>
      ))}
    </div>
  </div>
  </>
  );
};

export default Movies;