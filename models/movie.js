const mongoose = require("mongoose");

const {Schema} = mongoose;
const {ObjectId} = Schema;

const movieSchema = new Schema({
    name: {
        type: String,
        trim: true,
    },
    release: {
        type: Number,
        maxlength: 4,
    },
    genre: {
        type: ObjectId,
        ref: "Genre",
    },
    rating: {
        type: Number,
    },
    imageURL: {
        type: String,
    }
});

module.exports = mongoose.model("Movie", movieSchema);