const User = require('./user');
const Movie = require('./movies');
const Review = require('./reviews');
// const WatchList = require('./watchList');

User.hasMany(Review, {
  foreignKey: 'user_id',
});
Movie.hasMany(Review, {
  foreignKey: 'movie_id',
});

Review.belongsTo(Movie, {
  foreignKey: 'movie_id',
});

Review.belongsTo(User, {
  foreignKey: 'user_id',
});


module.exports = { User, Movie, Review };