import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios'; // Si no usas axios, puedes reemplazarlo por fetch
import './MovieDetail.css';  // Archivo CSS para estilos específicos del login;
import Modal from 'react-modal';
import Navbar from '../navbar/Navbar'
;Modal.setAppElement('#root');



const MovieDetail = () => {
   const location=useLocation(); //por aquí llegan las props del componente padre
   const { movie } = location.state || {}; //asegurarse de qe state existe

   const { movieId, salaId } = useParams(); // Extraer los parámetros de la URL
  //  console.log("pelicula aqui",movieId)
  //  console.log("sala aqui",salaId)

  const [movieDetails, setMovieDetails] = useState(null);
  
  const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';
    //estados para las sillas seleccionadas y modal
  const [selectedSilla, setSelectedSilla] = useState(null); // Para almacenar la silla seleccionada
  const [selectedSillaNumero, setSelectedSillaNumero] = useState(null); // Para almacenar el número de silla contado
  const [isModalOpen, setIsModalOpen] = useState(false); // Controlar la visibilidad del modal

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
  const handleSillaClick = (silla,numeroSilla) => {
    if (silla.estado === 'disponible') {
      console.log(`Silla seleccionada: ${silla.numero}`);
      // Aquí podrías manejar la selección, como actualizar el estado global o local.
      setSelectedSilla(silla); // Almacena la silla seleccionada
      setSelectedSillaNumero(numeroSilla); // Almacena el número de silla basado en seatCounter
      setIsModalOpen(true); // Abre el modal
    }
  };

  // Cierra el modal
  const closeModal = () => {
    setIsModalOpen(false); 
    setSelectedSilla(null); // Reinicia la silla seleccionada
    setSelectedSillaNumero(null); // Reinicia el número de silla
  };

  // Función para procesar el pago
  // const handlePayment = () => {
  //   console.log(`Procesando pago para la silla ${selectedSilla.numero}`);
  //   // Aquí puedes añadir la lógica de pago
  //   closeModal(); // Cierra el modal tras procesar el pago
  // };
  const handlePayment = async () => {
    try {
      // Enviar solicitud PUT al backend para actualizar el estado de la silla seleccionada
      const response = await axios.put(`${BASE_URL}/actualiza/salas/${salaId}/sillas/${selectedSilla.id}`, {
        estado: 'ocupado'
      });
      console.log("respuesta del servidor",response)

      //const response = await axios.get(`${BASE_URL}/detalles/pelicula/${movieId}/sala/${salaId}/sillas`);
  
      // Actualiza el estado local de las sillas
      setMovieDetails((prevDetails) =>
        prevDetails.map((silla) =>
          silla.id === selectedSilla.id ? { ...silla, estado: 'ocupado' } : silla
        )
      );
  
      console.log(`Pago confirmado para la silla ${selectedSillaNumero}`);
      closeModal(); // Cerrar el modal tras confirmar el pago
    } catch (error) {
      console.error('Error al procesar el pago:', error);
    }
  };


  let seatCounter = 1; //contador de silla de la sala



  return (
      <>
       <Navbar></Navbar>
   
    <div className="movie-detail-container">
    
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
              onClick={() => handleSillaClick(silla,index+1)}
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
              onClick={() => handleSillaClick(silla,index+6)}
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
              onClick={() => handleSillaClick(silla,index+11)}
              >
              {seatCounter++} {/* Incrementa el contador después de usarlo */}
              {/* {silla.id}  */}
              {/* {silla.estado} */}
            </div>
          ))}


      </div>
      

      {/* Modal para confirmar el pago */}
          
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Confirmar Pago"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Confirmar Pago</h2>
        {selectedSilla && (
          <div>
            <p>Silla seleccionada: {selectedSillaNumero}</p>
            <p>Estado: {selectedSilla.estado}</p>
            <p>Precio: $10.00</p> {/* Aquí puedes ajustar el precio dinámicamente */}
            <button onClick={handlePayment}>Confirmar Pago</button>
            <button onClick={closeModal}>Cancelar</button>
          </div>
        )}
      </Modal>

    </div>
    </>

  );
};

export default MovieDetail;
