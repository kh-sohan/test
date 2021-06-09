const Movie = require("../models/movie");

exports.getMovieById = (req, res, next, id) => {
    Movie.findById(id)
    .populate("genre")
    .exec((err, movie) => {
      if (err) {
        return res.status(400).json({
          error: "Movie not found in DB"
        });
      }
      req.movie = movie;
      next();
    });
};

exports.getMovie = (req, res) => {
  return res.json(req.movie);
};

exports.getAllMovies = (req, res) => {
  // let limit = req.query.limit ? parseInt(req.query.limit) : 8;
  let sortBy = req.query.sortBy ? req.query.sortBy : "Rating";

  Movie.find()
    .populate("genre")
    .sort([[sortBy, "desc"]])
    .exec((err, movies) => {
      if (err) {
        return res.status(400).json({
          error: "NO movies FOUND"
        });
      }
      res.json(movies);
    });
};