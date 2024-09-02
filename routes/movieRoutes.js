const express = require('express');
const { getAllMovies } = require('../controllers/movieController');

const router = express.Router();

router.get('/movie', getAllMovies);
// router.post('/', movieController.createMovie);

module.exports = router;