const mongoose = require('mongoose');
const Movie = require('../models/Movies');
const users = require('../models/User');

const Booking = async (req, res, next) => { 
    const { movie, date, seatNumber, user } = req.body;
    let existingMovie;
    let existingUser;
    try {
        existingMovie = await Movie.findById(movie);
        existingUser = await users.findById(user);
        console.log(existingUser, existingMovie)
    } catch (e) {
        return console.log(e);
    }
}
