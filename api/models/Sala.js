const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Sala = sequelize.define('Sala', {
  numero: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  horario: {
    type: DataTypes.DATE,  // Puedes usar TIME o DATETIME si necesitas fechas exactas
    allowNull: false,
  },
});

module.exports = Sala;