import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const getMovies = async()=>{
    const response = await api.get('/peliculas/movie')
    return response.data;
}