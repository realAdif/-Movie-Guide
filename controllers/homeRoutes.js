const router = require('express').Router();
const { Movies, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const movieData = await Movies.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
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