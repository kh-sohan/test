const mongoose = require("mongoose");

const {Schema} = mongoose;

const genreSchema = new Schema({
    Name: {
        type: String,
        required: true,
    },
    ImageURL: {
        type: String,
    }
});

module.exports = mongoose.model("Genre", genreSchema);