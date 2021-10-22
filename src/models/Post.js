const { DataTypes } = require('sequelize');
const db = require('../database/database');
const Category = require('./Category');

const Post = db.define('posts', {
    title: {
      type: DataTypes.STRING,
    },
    content: {
        type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    categoryId: {
        type: DataTypes.INTEGER,
    },
    creation_date: {
        type: DataTypes.DATE,
    },
});

Post.belongsTo(Category, {foreignKey: 'categoryId'});

module.exports = Post;