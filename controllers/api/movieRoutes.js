const router = require("express").Router();
const { Movie } = require("../../models");
const withAuth = require("../../utils/auth");

router.post('/', async (req, res) => {
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
