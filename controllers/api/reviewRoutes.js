const router = require("express").Router();
const { Review } = require("../../models");
const withAuth = require("../../utils/auth");

router.post('/', withAuth, async (req, res) => {
  try {
      const newMovie = await Review.create({
          ...req.body,
          user_id: req.session.user_id,
          movie_id: req.body.movie
      });

      res.status(200).json(newMovie);
  } catch (err) {
      res.status(400).json(err);
  }
});

module.exports = router;