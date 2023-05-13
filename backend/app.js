const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const userRouter = require('./routes/user-routes');
const adminRouter = require('./routes/admin-routes');
const movieRouter = require('./routes/movie-routes');
const bookingRouter = require('./routes/booking-routes');
dotenv.config();

const PORT = process.env.PORT || 5000

const cors = require('cors');
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

// middleware section
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movies", movieRouter);
app.use("/booking", bookingRouter);

// mongoose.connect(`mongodb+srv://shreyash29:${process.env.MONGODB_PASSWORD}@cluster0.u11g98p.mongodb.net/?retryWrites=true&w=majority`)

mongoose.connect("mongodb+srv://shreyash-kawale:LWQhWHVzqJg5tE9k@cluster0.fmsy4ln.mongodb.net/?retryWrites=true&w=majority")
app.listen(PORT, () => {
    console.log(`Database connected on 5000`);
})