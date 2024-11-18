// routes/sillas.js
const express = require('express');
const { getSillasDisponibles } = require('../controllers/salaController');

const router = express.Router();

// Ruta para obtener sillas disponibles de una película en una sala específica
/**
 * @swagger
 * /getSillasDisponibles:
 *   get:
 *     summary: Retrieve available seats
 *     tags: 
 *       - Sala
 *     responses:
 *       200:
 *         description: A list of available seats
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   seatNumber:
 *                     type: string
 *                     example: A1
 *                   isAvailable:
 *                     type: boolean
 *                     example: true
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
router.get('/getSillasDisponibles', getSillasDisponibles);
router.get('/pelicula/:movieId/sala/:salaId/sillas', getSillasDisponibles);

module.exports = router;