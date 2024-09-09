import React, { useState, useEffect } from 'react';
import { getMovies } from './api';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies();
      setMovies(data);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Listado de Películas</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.titulo} - {movie.anio} ({movie.rating})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

