const mongoose = require('mongoose');
const db = require('../index.js');

const locationSchema = new mongoose.Schema({
  country: String,
	state: String,
	city: String,
	address: String,
	badges: String
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;