const { DataTypes } = require('sequelize');
const db = require('../database/database');

const Category = db.define('categories', {
    category: {
        type: DataTypes.STRING,
    },
});

module.exports = Category;