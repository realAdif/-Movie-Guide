const User = require('./user');
const Movie = require('./movies');

User.hasMany(Movie, {
    foreignKey: 'user_id'
});

Movie.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Movie };