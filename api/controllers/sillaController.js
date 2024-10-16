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

//actualizar todas las sillas a disponible
const actualizarTodasSillas = async(req, res)=>{
  try {
    // Actualiza todas las sillas para que estén disponibles
    const [affectedRows] = await Silla.update(
      { estado: 'disponible' }, // Nuevo estado de las sillas
      { where: {} } // Afecta todas las sillas en la tabla
    );

    // Responde con un mensaje indicando cuántas filas fueron actualizadas
    res.send({ message: `${affectedRows} sillas actualizadas a "disponible"` });
  } catch (error) {
    console.error('Error al actualizar las sillas:', error);
    res.status(500).send({ error: 'Error al actualizar las sillas' });
  }
}

module.exports={
    updateSillaDisponible,
    actualizarTodasSillas,
}