const express = require('express');
const movieController = require('../controllers/movieController');

const router = express.Router();

router.get('/movie', movieController.getAllMovies);
// router.post('/', movieController.createMovie);

module.exports = router;