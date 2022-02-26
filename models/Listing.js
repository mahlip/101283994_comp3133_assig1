const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
    listing_id: {
        type: String,
        required: true,
        trim: true,
    },
    listing_title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxlength: 1000,
    },
    street: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    postal_code: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,   
    },
    listingEmail: {
        type: String,
        required: true,
        //index: true, //Optional if unique is defined
        trim: true,
        //minlength:10,
        //maxlength: 50,
        //Custom validation
        validate: function(value) {
          var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
          return emailRegex.test(value);
        }
      },
    listingUsername: {
        type: String,
        required: [true, 'Please enter your username'],
        trim: true,
    },
});

const Listing = mongoose.model("Listing", ListingSchema);
module.exports = Listing;