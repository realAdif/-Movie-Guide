// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class watchList extends Model {}

// watchList.init(
//   {
//     // define columns
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     user_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: "user",
//         key: "id",
//         unique: false
//       }
//     },
//     movie_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: "movie",
//         key: "id",
//         unique: false
//       }
//     }
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'watch_list',
//   }
// );

// module.exports = watchList;