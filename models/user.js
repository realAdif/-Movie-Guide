const { Model, DataTypes } = require('sequelize');
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class Users extends Model{}

Users.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user_email:{
            type:DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate:{
                isEmail: true
            }
        },

        user_firstName:{
            type: DataTypes.STRING, 
            allowNull: false,
        },

        user_lastName:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        user_name:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: [6,12],
                isAlphanumeric: true, 
            }
        },

        user_password:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: [8],
            }
        },
        user_description:{
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }

);
module.exports = Users;
