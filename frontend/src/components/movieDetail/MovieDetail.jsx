import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios'; // Si no usas axios, puedes reemplazarlo por fetch
import './MovieDetail.css';  // Archivo CSS para estilos específicos del login;


const MovieDetail = () => {
   const location=useLocation(); //por aquí llegan las props del componente padre
   const { movie } = location.state || {}; //asegurarse de qe state existe

   const { movieId, salaId } = useParams(); // Extraer los parámetros de la URL
  //  console.log("pelicula aqui",movieId)
  //  console.log("sala aqui",salaId)

  const [movieDetails, setMovieDetails] = useState(null);
  
  const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

  useEffect(() => {
    // Llamada a la API para obtener detalles de la película, sala y sillas
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/detalles/pelicula/${movieId}/sala/${salaId}/sillas`);
        // console.log("esta es la respuesta",response)
        setMovieDetails(response.data);
        // console.log("aquiMovieDetails", setMovieDetails);
        // console.log("aqui estan los datos",response.data)
      } catch (error) {
        console.error('Error al obtener los detalles de la película:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId, salaId]);

  // console.log("aqui movieDetails", movieDetails);
  // Si aún no hay detalles cargados, mostrar un mensaje de carga
  if (!movieDetails) {
    return <div>Cargando detalles de la película...</div>;
  }

  //cambia el estado de una silla
  const handleSillaClick = (silla) => {
    if (silla.estado === 'disponible') {
      console.log(`Silla seleccionada: ${silla.numero}`);
      // Aquí podrías manejar la selección, como actualizar el estado global o local.
    }
  };

  let seatCounter = 1;

  return (
    <div className="movie-detail-container">
      <h1>Detalles de la Película</h1>

      {/* Información de la película */}
   
        <h2>{movie.titulo}</h2>
        <p>Año: {movie.anio}</p>
        <p>Duración: {movie.duracion} minutos</p>
        <p>Rating: {movie.rating}/5</p>
        <h3>Sala número: {movieDetails[0].SalaId}</h3>

      <h2>Selecciona una silla</h2>

      {/* Pantalla en la parte superior */}
      <div className="pantalla">Pantalla</div>

          
    
      {/* Lista de sillas */}
      <div className="sala-layout">

      
          {movieDetails.slice(0, 5).map((silla, index) => (
            <div 
              key={silla.id}
              className={`silla ${silla.estado}`} // Cambia el estilo dependiendo del estado
              onClick={() => handleSillaClick(silla)}
              >
              {seatCounter++} {/* Incrementa el contador después de usarlo */} {/* Esto mostrará un número secuencial en lugar del id */}
              {/* {silla.estado} */}
            </div>
          ))}

            {/* Primer corredor */}
          <div className="corredor"></div>
          

          {movieDetails.slice(5, 10).map((silla,index) => (
            <div 
              key={silla.id}
              className={`silla ${silla.estado}`} // Cambia el estilo dependiendo del estado
              onClick={() => handleSillaClick(silla)}
              >
              {seatCounter++} {/* Incrementa el contador después de usarlo */}
              {/* {silla.id}  */}
              {/* {silla.estado} */}
            </div>
          ))}

            {/* Segundo corredor */}
            <div className="corredor"></div>
            
            {movieDetails.slice(10, 15).map((silla, index) => (
            <div 
              key={silla.id}
              className={`silla ${silla.estado}`} // Cambia el estilo dependiendo del estado
              onClick={() => handleSillaClick(silla)}
              >
              {seatCounter++} {/* Incrementa el contador después de usarlo */}
              {/* {silla.id}  */}
              {/* {silla.estado} */}
            </div>
          ))}


      </div>
    </div>
  );
};

export default MovieDetail;
