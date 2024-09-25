// controllers/salaController.js
const  Sala  = require('../models/Sala');
const  Funcion  = require('../models/Funcion');
const  Movie  = require('../models/Movie');
//Los modelos de la base de datos los debo importar desestructurados

const getFuncionesBySala = async (req, res) => {
    
  try {
    const salaId = req.params.id;
    console.log(salaId);
    // const sala = await Sala.findByPk({where:{Id:salaId}})
    const sala = await Sala.findByPk(salaId, {
      include: [{
        model: Funcion,
        include: [Movie],  // Incluye los detalles de la película en cada función
      }],
    });

    if (!sala) {
      return res.status(404).json({ message: 'Sala no encontrada' });
    }

    res.json(sala);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener las funciones de la sala' });
  }
};

module.exports={
    getFuncionesBySala,
}