const express = require('express');
const { addMovie } = require('../controllers/movie-controller');
const movieRouter = express.Router();

movieRouter.post("/", addMovie);

module.exports= movieRouter;