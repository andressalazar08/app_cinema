// routes/sillas.js
const express = require('express');
const { getSillasDisponibles } = require('../controllers/salaController');

const router = express.Router();

// Ruta para obtener sillas disponibles de una película en una sala específica
router.get('/pelicula/:movieId/sala/:salaId/sillas', getSillasDisponibles);

module.exports = router;