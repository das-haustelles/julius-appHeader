const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/jsDb')

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('jsDb database connected')
})

// // Settings collection
// const settingsSchema = new mongoose.Schema({
//   language: String,
// 	currency: String
// })
// const Settings = mongoose.model('Settings', settingsSchema);

// var testSetting = new Settings({
//   language: 'English', 
//   currency: 'USD'
// })
// console.log('testSetting language: ', testSetting.language)

// testSetting.save(function(err) {
//   if (err) return console.log(err);
//   // data saved!
// })

// Signin collection
// const signinSchema = new mongoose.Schema({
//   email: String,
// 	username: String,
// 	password: String
// })
// const Signin = mongoose.model('Signin', signinSchema);

// // Location collection
// const locationSchema = new mongoose.Schema({
//   country: String,
// 	state: String,
// 	city: String,
// 	address: String,
// 	badges: String
// })
// const Location = mongoose.model('Location', locationSchema);

// // Photos collection
// const photosSchema = new mongoose.Schema({
//   photoUrl: String
// })
// const Photos = mongoose.model('Photos', photosSchema);


module.exports = db;
