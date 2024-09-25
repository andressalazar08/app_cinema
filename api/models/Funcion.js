// models/Funcion.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Sala = require('./Sala');
const Movie = require('./Movie');
const Silla = require('./Silla');

const Funcion = sequelize.define('Funcion', {
  horario: {
    type: DataTypes.DATE,  // Puedes usar TIME o DATETIME si necesitas fechas exactas
    allowNull: false,
  },
});

Funcion.belongsTo(Sala);  // Relación: una función ocurre en una sala
Funcion.belongsTo(Movie); // Relación: una función proyecta una película
Funcion.hasMany(Silla, {foreignKey: 'FuncionId'})

module.exports = Funcion;