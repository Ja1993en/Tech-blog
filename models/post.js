const { Model, DataTypes, } = require('sequelize');
const sequelize = require('../config/connection.js');

class Post extends Model { };

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_published: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,

        },
        author_id: {
            type: DataTypes.INTEGER,
            references: {
            model: "user",
            key: "id"
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
    }

);


module.exports = Post;