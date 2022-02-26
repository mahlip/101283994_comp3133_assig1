const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please enter your username'],
    trim: true,
    unique: [true, "This username is already taken."],
  },
  firstname: {
    type: String,
    required: [true, 'Please enter first name'],
    trim: true,
  },
  lastname: {
    type: String,
    alias: 'surname',
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    //index: true, //Optional if unique is defined
    unique: [true, "Duplicate Email Not allowed"],
    trim: true,
    //minlength:10,
    //maxlength: 50,
    //Custom validation
    validate: function(value) {
      var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailRegex.test(value);
    }
  },
  type: {
    type: String,
    enum: ['Customer', 'Admin']
  }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;