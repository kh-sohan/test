const Movie = require("../models/movie");

exports.getMovieById = (req, res, next, id) => {
    Movie.findById(id)
    .populate("Genre")
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
  console.log(req.movie + " debug");
  return res.json(req.movie);
};

exports.getAllMovies = (req, res) => {
  let sortBy = req.query.sortBy ? req.query.sortBy : "Rating";

  Movie.find()
    .populate("Genre")
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

exports.getMoviesByGenre = (req, res) => {      // got it to work ya
  let sortBy = req.query.sortBy ? req.query.sortBy : "Rating";
  Movie.find()
  .populate("Genre")
  .sort([[sortBy, "desc"]])
  .exec((err, movies) => {
    if (err) {
      return res.status(400).json({
        error: "NO movies FOUND"
      });
    }
    movies = movies.filter(movie => movie.Genre.Name === req.genre.Name);
    res.json(movies);
  });
};


exports.updateMovie = (req, res) => {       // to be used when updating movie genre [works]   // maybe change it to req.body
  const newgenre = req.genre;
  const movie = req.movie;
  console.log(newgenre.Name);
  movie.Genre = newgenre;

  movie.save((err, updatedMovie) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to update movie"
      });
    }
    res.json(updatedMovie);
  });
};

exports.updateMovieRating = (req, res) => {     // works
  req.movie.Rating = req.body.Rating;
  req.movie.save((err, updatedMovie) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to update movie"
      });
    }
    res.json(updatedMovie);
  });
};

