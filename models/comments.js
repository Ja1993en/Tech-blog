const { Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/connection.js');

class Comment extends Model { };

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
      
        comment: {
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
        post_id: {
            type: DataTypes.INTEGER,
            references: {
            model: "post",
            key: "id"
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comments',
    }

);


module.exports = Comment;