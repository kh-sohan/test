require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
// const cors = require("cors");

// routes

const genreRoutes = require("./routes/genre");
const movieRoutes = require("./routes/movie");

//  DB Connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("DATABASE IS CONNECTED");
  });

app.use(express.urlencoded({extended: true}));
app.use(express.json());
// app.use(cors())

//PORT
const port = process.env.PORT || 8000;

app.use('/api', movieRoutes);
app.use('/api', genreRoutes);

//Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});