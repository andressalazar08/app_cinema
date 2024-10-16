const express = require('express');
const { updateSillaDisponible, actualizarTodasSillas } = require('../controllers/sillaController');


const router  =  express.Router();


router.put('/salas/:salaId/sillas/:sillaId', updateSillaDisponible);
router.put('/sillas/reset',actualizarTodasSillas)

module.exports=router;

