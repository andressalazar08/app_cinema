import React, { useState, useEffect } from 'react';
import { getMovies } from '../../api';
import './Movies.css';

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
    <div className="movies-container">
    <h1>Listado de Películas</h1>
    <div className="movie-list">
      {movies.map((movie) => (
        <div className="movie-card" key={movie.id}>
          <h2>{movie.titulo}</h2>
          <p>Año: {movie.anio}</p>
          <p>Duración: {movie.duracion} minutos</p>
          <p>Rating: {movie.rating}/5</p>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Movies;