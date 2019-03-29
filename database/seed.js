const faker = require('faker');
const db = require('./index.js/index.js');
const Location = require('./schemas/Location.js');
const Settings = require('./schemas/Settings.js');
const Signin = require('./schemas/Signin');

// settings
var languages = ['Dansk', 'Deutcsh', 'English', 'Espanol', 'Francais', 'Italian', 'Nederlands', 'Norsk', 'Polski', 'Potugues', 'Japanese', 'Chinese'];
for (var i = 0; i < 100; i++) {
  var randomLanguage = languages[Math.floor(Math.random() * languages.length)];

  var newRandomSettings = new Settings({
    language: randomLanguage,
    currency: faker.finance.currencyCode() 
  });

  newRandomSettings.save(function(err) {
    if (err) return console.log(err);
    // saved
  })

}

// signin
for (var i = 0; i < 100; i++) {
  
  var newRandomSignin = new Signin({
    email: faker.internet.email(),
    username: faker.internet.userName(),
    password: faker.internet.password()
  })

  newRandomSignin.save(function(err) {
    if (err) return console.log(err);
    // saved
  })

}


// location
for (var i = 0; i < 100; i++) {

  var newRandomLocation = new Location({
    country: faker.address.country(),
    state: faker.address.state(),
    city: faker.address.city(),
    address: faker.address.streetAddress(),
    photoUrl: faker.image.image()
  })

  newRandomLocation.save(function(err) {
    if (err) return console.log(err);
    // saved
  })

}



// var badges = ['','Free Wifi', 'Free Breakfast']
// badges: String        leave out badges for now