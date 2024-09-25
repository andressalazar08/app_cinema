// relations.js
const Movie = require('../models/Movie');
const Sala = require('../models/Sala');
const Silla = require('../models/Silla');
const Funcion = require('../models/Funcion');

// // Una sala tiene muchas sillas
Sala.hasMany(Silla, { foreignKey: 'salaId' });
Silla.belongsTo(Sala, { foreignKey: 'salaId' });

// // Una sala tiene muchas funciones, cada función proyecta una película
Sala.hasMany(Funcion, { foreignKey: 'salaId' });
Funcion.belongsTo(Sala, { foreignKey: 'salaId' });

// // Una película puede tener muchas funciones
Movie.hasMany(Funcion, { foreignKey: 'movieId' });
Funcion.belongsTo(Movie, { foreignKey: 'movieId' });