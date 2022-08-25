const router = require('express').Router();
const { Movie, User, Review } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all Movies that have the attribute upcoming or newRelease, also JOIN with user data
    const { Op } = require("sequelize")
    const movieData = await Movie.findAll({
      where: {
        [Op.or]: [
          { display: "upcoming" }, 
          { display: "newRelease" }
        ],
      }
    });

   // Serialize data so the template can read it
    const movies = movieData.map((movie) => movie.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      movies, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Navigate User Profile
router.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });
    const user = userData.get({ plain: true });

    // Get all Movies by Rating
    const movieData = await Review.findAll({
      include: [Movie],
      where: {
        user_id: req.session.user_id,
      },
      order: [
        ["rating","DESC"]
      ],
    });
          
    // Serialize data so the template can read it
    const movies = movieData.map((movie) => movie.get({ plain: true }));

    const moviesWithStars = movies.map(movie => {
      if (movie.rating == 1) {
        movie.starRating = "★"
      }
      if (movie.rating == 2) {
        movie.starRating = "★★"
      }
      if (movie.rating == 3) {
        movie.starRating = "★★★"
      }
      if (movie.rating == 4) {
        movie.starRating = "★★★★"
      }
      if (movie.rating == 5) {
        movie.starRating = "★★★★★"
      }
      return movie;
    });
    
    res.render('profile', {
      ...user,
      movies: moviesWithStars,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

// redirect to SignUp route if user navigates to signup
router.get('/signup', (req, res) => {
  res.status(200).render('signup');
});

// redirect to login route if not logged in
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/movies', withAuth, (req, res) => {
  
  res.status(200).render('movies', {
    logged_in: req.session.logged_in 
  });
})
router.get('/reviews', withAuth, (req, res) => {
  
  res.status(200).render('reviews', {
    logged_in: req.session.logged_in 
  });
})

module.exports = router;
