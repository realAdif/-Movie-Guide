const { Model, DataTypes } = require('sequelize');
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");
const {Model, DateTypes, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Users extends Model{}

Users.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email:{
            type:DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate:{
                isEmail: true
            }
        },
        firstName:{
            type: DataTypes.STRING, 
            allowNull: false,
        },
        lastName:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: [6,12],
                isAlphanumeric: true, 
            }
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: [8],
            }
        },
        description:{
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
    hooks: {
        beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
        },
        beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
}
);
module.exports = Users;
