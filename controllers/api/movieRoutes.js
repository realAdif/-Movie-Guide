const router = require("express").Router();
// const { Movie, Review } = require("../../models");
// const withAuth = require("../../utils/auth");

// router.get('/ratings', withAuth, async (req, res) => {
//   try {
//     // Get all Movies by Rating
//     const movieData = await Review.findAll({
//       include: [Movie],
//       where: {
//         user_id: req.session.user_id,
//       },
//       order: [
//         ["rating","DESC"]
//       ],
//     });
    
//     // Serialize data so the template can read it
//     const movies = movieData.map((movie) => movie.get({ plain: true }));
//     // Pass serialized data and session flag into template
//     console.log(movies);
//     res.render('profile', { 
//       movies,
//       logged_in: req.session.logged_in 
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
