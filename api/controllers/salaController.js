const Silla = require('../models/Silla');
const Sala = require('../models/Sala');
const Movie = require('../models/Movie');

// Obtener sillas disponibles para una película en una sala
const getSillasDisponibles = async (req, res) => {
  const { movieId, salaId } = req.params;

  try {
    // Buscar la sala y verificar que esté proyectando la película correcta
    const sala = await Sala.findOne({
      where: { id: salaId, MovieId: movieId },
      include: {
        model: Silla
        // where: { estado: 'disponible' }  // Filtrar solo las sillas disponibles
      }
    });

    if (!sala) {
      return res.status(404).json({ message: 'No se encontraron sillas para esta película en esta sala.' });
    }

    // Devolver las sillas disponibles de esa sala
    return res.json(sala.Sillas); // sala.Sillas contiene las sillas disponibles
  } catch (error) {
    console.error('Error al obtener sillas disponibles:', error);
    return res.status(500).json({ message: 'Error del servidor' });
  }
};

module.exports = {
  getSillasDisponibles
};