const { DataTypes } = require("sequelize");
const { sequelize } = require('../database/sequelize');

module.exports = sequelize.define('Game', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    timeline: {
        type: DataTypes.JSON,
        allowNull: false,
    }
});