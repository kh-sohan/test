const express = require("express");
const router = express.Router();
const {getAllMovies, getMovieById, getMovie, updateMovie, updateMovieRating} = require("../controllers/movie");
const {getGenreById} = require("../controllers/genre");

router.param("movieId", getMovieById);
router.param("genreId", getGenreById);

router.get("/movie/:movieId", getMovie);    // when a movie title is clicked no 4
router.get("/movies", getAllMovies);        // probably the homepage
router.put("/movie/:movieId/:genreId", updateMovie);        // not needed as of now
router.put("/movie/:movieId", updateMovieRating);

module.exports = router;