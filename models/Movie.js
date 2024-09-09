const { DataTypes } = require('sequelize');
const  sequelize = require('../config/database');

const Movie = sequelize.define('Movie', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    anio: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    duracion: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    rating: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});

module.exports = Movie;