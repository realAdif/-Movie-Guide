const User = require('./user');
const Movies = require('./movies');

User.hasMany(Movies, {
    foreignKey: 'user_id'
});

Movies.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Movies };