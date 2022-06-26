const mongoose = require('mongoose');

const schema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true,
    },
    storedPasswords: {
      type: [String]
    }
});



const user = mongoose.model('User', schema);

module.exports = user;