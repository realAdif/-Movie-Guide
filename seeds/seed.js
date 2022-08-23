const sequelize = require('../config/connection');

const seedUsers = require('./userData.json');
const seedMovies = require('./moviesData.json');
const seedReviews = require('./reviewsData.json');
const { User, Movie, Review } = require('../models');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(seedUsers, {
    individualHooks: true,
    returning: true,
  });

  for (const movie of seedMovies) {
    await Movie.create({
      ...movie,
    });
  }
  for (const review of seedReviews) {
    await Review.create({
      ...review,
    })
  }
  process.exit(0);
};

seedDatabase();