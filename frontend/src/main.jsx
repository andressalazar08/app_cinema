import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/login/Login.jsx';
import Movies from './components/movies/Movies.jsx';
import MovieDetail from './components/movieDetail/MovieDetail.jsx';
// import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

      <Routes>
        {/* ruta para login de inicio */}
        <Route path="/" element={<Login />} />

        {/* ruta para el listado de películas */}
        <Route path="/movies" element={<Movies />} />

        {/* ruta para el detalle de la película */}
        {/* <Route path="/movies/:id" element={<MovieDetail />} /> */}

         {/* ruta para el detalle de la película y las sillas en la sala */}
         <Route path="/movies/:movieId/sala/:salaId" element={<MovieDetail />} />

      </Routes>
        
    </BrowserRouter>
    
  </StrictMode>,
)
