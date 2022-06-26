const mongoose = require('mongoose');

const schema = mongoose.Schema(
  {
    id: {
        type: String,
        required: true
    },
    url: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
});



const password = mongoose.model('Password', schema);

module.exports = password;