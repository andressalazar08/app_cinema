const express = require('express');
const { getAllMovies } = require('../controllers/movieController');

const router = express.Router();

//router.get('/movie', getAllMovies);
/**
 * @swagger
 * /getAllMovies:
 *   get:
 *     summary: Retrieve a list of all movies
 *     tags: 
 *       - Movies
 *     responses:
 *       200:
 *         description: A list of movies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: 12345
 *                   title:
 *                     type: string
 *                     example: Inception
 *                   director:
 *                     type: string
 *                     example: Christopher Nolan
 *                   releaseYear:
 *                     type: integer
 *                     example: 2010
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Internal server error
 */
router.get('/getAllMovies', getAllMovies);
// router.post('/', movieController.createMovie);

module.exports = router;