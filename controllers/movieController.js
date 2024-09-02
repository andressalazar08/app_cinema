const Movie = require('../models/Movie');

const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.findAll();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: 'Error buscando las películas' });
    }
};

// exports.createMovie = async (req, res) => {
//     try {
//         const { title, duration, rating } = req.body;
//         const movie = await Movie.create({ title, duration, rating });
//         res.status(201).json(movie);
//     } catch (error) {
//         res.status(500).json({ error: 'Error creating movie' });
//     }
// };
module.exports = {
    getAllMovies,
}