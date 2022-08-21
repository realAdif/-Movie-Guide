const router = require("express").Router();
const { Movie } = require("../../models");
const withAuth = require("../../utils/auth");

router.get('/', withAuth , async (req, res) => {
  try {
    // Get all Movies
    const movieData = await Movie.findAll({
    });

    // Serialize data so the template can read it
    const projects = movieData.map((movie) => movie.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('movies', { 
      projects, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
    try {
        const newMovie = await Movie.create({
            ...req.body,
            user_id: req.session.user_id
        });
        
        res.status(200).json(newMovie);
    } catch (err) {
        res.status(400).json(err);
    }
});


module.exports = router;
