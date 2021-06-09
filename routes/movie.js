const express = require("express");
const router = express.Router();
const {getAllMovies, getMovieById, getMovie} = require("../controllers/movie");

router.param("movieID", getMovieById);


router.get("/movie/:movieID", getMovie);
router.get("/movies", getAllMovies);

module.exports = router;