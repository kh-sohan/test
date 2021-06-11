const express = require("express");
const router = express.Router();
const {getAllMovies, getMovieById, getMovie, updateMovie, updateMovieRating} = require("../controllers/movie");
const {getGenreById} = require("../controllers/genre");

router.param("movieId", getMovieById);
router.param("genreId", getGenreById);

router.get("/movie/:movieId", getMovie);    // when a movie title is clicked no 4   [worsks]
router.get("/movies", getAllMovies);        // probably the homepage                [works]
router.put("/movie/:movieId/:genreId", updateMovie);        // not needed as of now [works]
router.put("/movie/:movieId", updateMovieRating);                                 //  [works]

module.exports = router;