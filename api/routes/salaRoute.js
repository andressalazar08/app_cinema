// routes/salaRoutes.js
const express = require('express');
const { getFuncionesBySala } = require('../controllers/salaController');
const router = express.Router();

router.get('/salas/:id/funciones', getFuncionesBySala);

module.exports = router;