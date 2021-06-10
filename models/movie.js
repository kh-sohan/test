const mongoose = require("mongoose");

const {Schema} = mongoose;
const {ObjectId} = Schema;

const movieSchema = new Schema({
    Name: {
        type: String,
        trim: true,
    },
    Release: {
        type: Number,
        maxlength: 4,
    },
    Genre: {
        type: ObjectId,
        ref: "Genre",
    },
    Rating: {
        type: Number,
    },
    ImageURL: {
        type: String,
    }
});

module.exports = mongoose.model("Movie", movieSchema);