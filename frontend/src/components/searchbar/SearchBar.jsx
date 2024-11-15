import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ movies, setFilteredMovies }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);
        
        const filtered = movies.filter(movie => {
            return (
                movie.titulo.toLowerCase().includes(value) ||
                movie.anio.toString().includes(value) ||
                movie.duracion.toString().includes(value) ||
                movie.rating.toString().includes(value) ||
                movie.Salas.some(sala => sala.numero.toString().includes(value) || 
                                           new Date(sala.horario).toLocaleString().toLowerCase().includes(value))
            );
        });
        setFilteredMovies(filtered);
    };

    return (
        <div className="search-bar">
            <input 
                type="text"
                placeholder="Buscar por título, año, duración, rating, sala o horario..."
                value={searchTerm}
                onChange={handleSearch}
            />
        </div>
    );
};

export default SearchBar;

