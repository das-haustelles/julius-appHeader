const server = require('../server/index');
const dbServer = require('../database/index');

const Location = require('../database/schemas/Location');
const Settings = require('../database/schemas/Settings');
const Signin = require('../database/schemas/Signin');

describe('Database collection shape test', () => {
// test for correct shape of data from seed in
// Signin, Location, Settings

  let collectionData;

  Signin.find()
    .then((signin) => {
      collectionData = signin;
    });

  test('should test for correct data shape for Signin collection', (done) => {


    const columns = ['email', 'username', 'password'];
    expect(Object.keys(collectionData[0].toJSON())).toEqual(expect.arrayContaining(columns));
    done();
  });

  // it('should test for correct data shape for Location collection', () => {

  // });

  // it('should test for correct data shape for Settings collection', () => {

  // });
});
