const sequelize = require('../config/connection');

const seedUsers = require('./userData.json');
const seedMovies = require('./moviesData.json');
const { User, Movie } = require('../models');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(seedUsers, {
    individualHooks: true,
    returning: true,
  });

  for (const movie of seedMovies) {
    await Movie.create({
      ...movie,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });
//   console.log('\n----- DATABASE SYNCED -----\n');

//   await seedMovies();
//   console.log('\n----- MOVIES SEEDED -----\n');

//   await seedUsers();
//   console.log('\n----- USERS SEEDED -----\n');

//   process.exit(0);
// };

seedDatabase();