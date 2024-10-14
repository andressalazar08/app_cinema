import React, { useState, useEffect } from 'react';
import { getMovies } from '../../api';
import './Movies.css';
import Navbar from '../navbar/Navbar'; 
import { Link } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies();
      setMovies(data);
    };
    fetchMovies();
    console.log("entrada")
    console.log(movies)
  }, []);

  return (
    <>
    <Navbar></Navbar> 
      <div className="movies-container">
        <h1>Listado de Películas</h1>

        {/* tarjeta pelídulas */}

        <div className="movie-list">

              {movies.map((movie)=>{
                return (
                
                <div className="movie-card"  key={movie.id}> 
                      <h2>{movie.titulo}</h2>
                      <img  src={movie.image_url}  alt={movie.titulo}   className="movie-image" />
                      <p>Año: {movie.anio}</p>
                      <p>Duración: {movie.duracion} minutos</p>
                      <p>Rating: {movie.rating}/5</p>
                      
                          {movie.Salas && (
                            <div className="salas-info">
                              <h3>Salas y Horarios</h3>
                              {movie.Salas.map((sala) => (
                                <div key={sala.id} className="sala-card">
                                  <p><strong>Sala número:</strong> {sala.numero}</p>
                                  <p><strong>Horario:</strong> {new Date(sala.horario).toLocaleString()}</p>
                                </div>
                              ))}
                            </div>)}

            
                    <Link 
                        to={`/movies/${movie.id}/sala/${movie.Salas[0].numero}`}
                        state={{movie:movie}} //envío por props la info de movie
                          >
                      
                        <button>Ver detalles</button>
                      </Link>



                </div>

                )
              })}

        </div>
        </div>


    </>
  );
};

export default Movies;