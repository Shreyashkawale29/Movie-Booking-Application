const express = require('express');
const { deleteBooking } = require('../controllers/booking-controller');
const Booking = require('../models/Bookings');
const bookingRouter = express.Router();

bookingRouter.post('/',Booking);
bookingRouter.delete('/:id',deleteBooking);

module.exports=bookingRouter;