import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:8080",
});

export const getMovies = async()=>{
    const response = await api.get('/peliculas/movie')
    return response.data;
}