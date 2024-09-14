import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/login/Login.jsx';
import Movies from './components/movies/Movies.jsx';

// import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

      <Routes>
        {/* ruta para login de inicio */}
        <Route path="/" element={<Login />} />

        {/* ruta para el listado de películas */}
        <Route path="/movies" element={<Movies />} />

      </Routes>
        
    </BrowserRouter>
    
  </StrictMode>,
)
