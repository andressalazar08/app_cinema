const express = require('express');
const { updateSillaDisponible } = require('../controllers/sillaController');


const router  =  express.Router();


router.put('/salas/:salaId/sillas/:sillaId', updateSillaDisponible);

module.exports=router;

