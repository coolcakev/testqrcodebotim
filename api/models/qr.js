const Sequelize = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('qr', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = User;