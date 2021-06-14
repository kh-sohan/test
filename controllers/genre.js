const Genre = require("../models/genre");

exports.getGenreById = (req, res, next, id) => {
    Genre.findById(id).exec((err, genre) => {
      if (err) {
        return res.status(400).json({
          error: "Genre not found in DB"
        });
      }
      req.genre = genre;
      next();
    });
};

// exports.getGenre = (req, res) => {
//     return res.json(req.genre);
// };

// exports.getAllGenres = (req, res) => {
//     Movie.find()
//     .distinct('Genre')
//     .exec((err, movies) => {
//         if (err) {
//           return res.status(400).json({
//             error: "No genres found"
//           });
//         }
//         res.json(movies);
//     });
// };

exports.getAllGenres = (req, res) => {
  Genre.find()
    // .populate("Genre")
    .exec((err, genres) => {
      if (err) {
        return res.status(400).json({
          error: "No genres FOUND"
        });
      }
      res.json(genres);
    });
};