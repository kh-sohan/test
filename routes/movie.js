const express = require("express");
const router = express.Router();
const {getAllMovies, getMovieById, getMovie, updateMovie} = require("../controllers/movie");
const {getGenreById} = require("../controllers/genre");

router.param("movieId", getMovieById);
router.param("genreId", getGenreById);

router.get("/movie/:movieId", getMovie);
router.get("/movies", getAllMovies);
router.put("/movie/:movieId/:genreId", updateMovie);

module.exports = router;