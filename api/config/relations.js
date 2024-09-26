// relations.js
const Movie = require('../models/Movie');
const Sala = require('../models/Sala');
const Silla = require('../models/Silla');
// const Funcion = require('../models/Funcion');

//Una sala tiene muchas sillas
Sala.hasMany(Silla, { foreignKey: 'SalaId' });
Silla.belongsTo(Sala, { foreignKey: 'SalaId' });

// Una sala proyecta una película
Sala.belongsTo(Movie, { foreignKey: 'MovieId' });
Movie.hasMany(Sala, { foreignKey: 'MovieId' });