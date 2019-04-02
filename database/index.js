const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/jsDb')

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('jsDb database connected')
})


module.exports = db;
