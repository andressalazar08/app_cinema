import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MovieDetail = () => {
  const { id } = useParams(); // Obtiene el ID de la película desde la URL
  const [movie, setMovie] = useState(null);
  const [seats, setSeats] = useState([]);

//   useEffect(() => {
//     // Llamada a la API para obtener la película por ID
//     const fetchMovie = async () => {
//       const response = await fetch(`/api/movies/${id}`);
//       const data = await response.json();
//       setMovie(data.movie);
//       setSeats(data.seats); // Supongamos que también se obtienen las sillas
//     };
//     fetchMovie();
//   }, [id]);

  return (
    <div>
      {movie ? (
        <>
          <h1>{movie.titulo}</h1>
          <p>Duración: {movie.duracion} minutos</p>
          <p>Rating: {movie.rating}/5</p>

          <h2>Sillas Disponibles</h2>
          {/* <div className="seats-container">
            {seats.map((seat, index) => (
              <button
                key={index}
                disabled={!seat.available} // Si la silla no está disponible, deshabilitar
              >
                {seat.number}
              </button>
            ))}
          </div> */}
        </>
      ) : (
        <>
        <p>Cargando detalles...</p>
        </>
      )}
    </div>
  );
};

export default MovieDetail;