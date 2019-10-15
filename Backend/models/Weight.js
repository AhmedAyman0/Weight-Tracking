const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//monggose

// Define collection and schema
const Weight = new Schema({
  weight: {
    type: Number
  },
  user: {
    type: [{ type: Schema.Types.ObjectId, ref: 'User' }]
  },
  date: {
    type: Date
  },
}, {
  collection: 'weights'
})

module.exports = mongoose.model('Weight', Weight)