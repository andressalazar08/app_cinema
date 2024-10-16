const Silla = require('../models/Silla');
const Sala = require('../models/Sala');


//actualizar silla disponible
const updateSillaDisponible = async(req,res)=>{
    const { salaId, sillaId } = req.params;

  try {
    // Buscar la silla por su ID y asegurarse de que pertenece a la sala especificada
    const silla = await Silla.findOne({
      where: {
        id: sillaId,
        SalaId: salaId, // Asegúrate de que la silla pertenece a la sala
      },
    });

    if (!silla) {
      return res.status(404).send({ error: 'Silla no encontrada o no pertenece a la sala' });
    }

    // Actualizar el estado de la silla a 'ocupada'
    silla.estado = 'ocupada';
    await silla.save(); // Guardar el cambio en la base de datos

    res.send(silla); // Enviar la silla actualizada
  } catch (error) {
    res.status(500).send({ error: 'Error al actualizar la silla' });
  }
};

module.exports={
    updateSillaDisponible,
}