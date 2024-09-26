import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Si no usas axios, puedes reemplazarlo por fetch

const MovieDetail = () => {
   const { movieId, salaId } = useParams(); // Extraer los parámetros de la URL
   console.log("pelicula aqui",movieId)
   console.log("sala aqui",salaId)

  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    // Llamada a la API para obtener detalles de la película, sala y sillas
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/detalles/pelicula/${movieId}/sala/${salaId}/sillas`);
        console.log("esta es la respuesta",response)
        setMovieDetails(response.data);
        console.log("aquiMovieDetails", setMovieDetails);
        console.log("aqui estan los datos",response.data)
      } catch (error) {
        console.error('Error al obtener los detalles de la película:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId, salaId]);

  console.log("aqui movieDetails", movieDetails);
  // Si aún no hay detalles cargados, mostrar un mensaje de carga
  if (!movieDetails) {
    return <div>Cargando detalles de la película...</div>;
  }

  return (
    <div className="movie-detail-container">
      <h1>Detalles de la Película</h1>
      {/* Información de la película */}
      <div className="movie-info">
        {/* <h2>{movieDetails.movie.titulo}</h2>
        <p>Año: {movieDetails.movie.anio}</p>
        <p>Duración: {movieDetails.movie.duracion} minutos</p>
        <p>Rating: {movieDetails.movie.rating}/5</p> */}
      </div>

      {/* Información de la sala */}
      <div className="sala-info">
      <h3>Sala número: {movieDetails[0].SalaId}</h3>
        {/*
        <p>Horario: {new Date(movieDetails.sala.horario).toLocaleString()}</p> */}
      </div>

      {/* Lista de sillas */}
      <div className="sillas-info">
        <h3>Sillas Disponibles</h3>
        <ul>
          {movieDetails.map((silla) => (
            <li key={silla.id}>
              Silla número: {silla.id} - Estado: {silla.estado}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieDetail;
