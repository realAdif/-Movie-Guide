const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Movie extends Model {}

Movie.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        year: {
            type: DataTypes.INTEGER,
            validate: {
                len:[4, 4]
            }
        },
        watch_status: {
            type: DataTypes.STRING
        },
        priority: {
            type: DataTypes.STRING
        },
        rating: {
            type: DataTypes.INTEGER
        },
        review: {
            type: DataTypes.STRING
        },
        display: {
            type: DataTypes.STRING,
            allowNull: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'movies',
    }
);

module.exports = Movie;