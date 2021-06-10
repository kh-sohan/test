const express = require("express");
const router = express.Router();

const { getAllGenres, getGenreById } = require("../controllers/genre");
const { getMoviesByGenre } = require("../controllers/movie");

router.param("genreId", getGenreById);


router.get("/genres", getAllGenres);
router.get("/genre/:genreId", getMoviesByGenre);            // to be used for No 3

module.exports = router;