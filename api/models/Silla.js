// models/Silla.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Sala = require('./Sala');

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

module.exports = Silla;