const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  date: String,
  description: String,
  venue: String,
});

module.exports = mongoose.model('Event', eventSchema);
