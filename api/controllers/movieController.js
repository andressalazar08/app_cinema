const Movie = require('../models/Movie');
const Sala = require('../models/Sala');

const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.findAll({
            include: [
                {
                    model: Sala, // Incluimos la información de las salas
                    attributes: ['numero', 'horario'], // Solo los campos que te interesan de la sala
                    as: 'Salas',
                },
            ],
        });
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: error });
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