const mongoose = require('mongoose');
require('../index.js');

const settingsSchema = new mongoose.Schema({
  language: String,
  currency: String,
});
const Settings = mongoose.model('Settings', settingsSchema);

// TEST
// var testSetting = new Settings({
//   language: 'English'
//   currency: 'USD'
// })

// testSetting.save(function(err) {
//   if (err) return console.log(err);
//   // data saved!
// })

// const Location = mongoose.model('Location', locationSchema);

module.exports = Settings;
