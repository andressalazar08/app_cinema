const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Sala = sequelize.define('Sala', {
  numero: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Sala;