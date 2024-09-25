// models/Silla.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Sala = require('./Sala');
const Funcion = require('./Funcion'); // Importa el modelo Funcion

const Silla = sequelize.define('Silla', {
  numero: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING,  // Estado: 'disponible', 'ocupado', etc.
    allowNull: false,
  },
});

Silla.belongsTo(Sala); // Relación: una silla pertenece a una sala
// Relación: una silla pertenece a una función
//Silla.belongsTo(Funcion, { foreignKey: 'FuncionId' }); // Añade esta línea


module.exports = Silla;