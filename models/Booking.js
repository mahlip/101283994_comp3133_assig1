const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    listing_id: {
        type: String,
        required: true,
        trim: true,
    },
    booking_id: {
        type: String,
        required: true,
    },
    booking_date: {
        type: String,
        required: true,
        maxlength: 1000,
    },
    booking_start: {
        type: String,
        required: true,
    },
    booking_end: {
        type: String,
        required: true,
    },
    bookingUsername: {
        type: String,
        required: [true, 'Please enter your username'],
        trim: true,
    },
});

const Booking = mongoose.model("Booking", BookingSchema);
module.exports = Booking;