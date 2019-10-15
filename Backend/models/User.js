const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//monggose

// Define collection and schema
const User = new Schema({
  userName: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  weights: {
    type: Array
  },
  gender: {
    type: String
  }
}, {
  collection: 'users'
})

module.exports = mongoose.model('User', User)