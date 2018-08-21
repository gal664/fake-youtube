const mongoose = require('../db');

const userSchema = new mongoose.Schema({
      name: String,
      lastName: String,
      email: String,
})

const User = mongoose.model('User', userSchema);

let user = new User({
      name: "Gal",
      lastName: "Yaniv",
      email: "gal@mail.com",
});

user.save();