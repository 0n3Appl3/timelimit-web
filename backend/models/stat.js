const { DataTypes } = require("sequelize");
const { sequelize } = require('../database/sequelize');

module.exports = sequelize.define('Stat', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    gameId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    user: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    kills: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    deaths: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    blocksCollected: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    timeLeft: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});