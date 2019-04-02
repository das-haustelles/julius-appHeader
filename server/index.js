var express = require('express');
var cors = require('cors');

var database = require('../database/index.js')
var app = express();
var port = 3001;

app.use(cors());

app.get('/', (req, res) => {
  res.send("Hello from the server.")
})

// settings  get put
app.get('/settings', (req,res) => {
  res.send(`Hello from settings get route`)
})

// app.put('/path',(req,res) => {

// })



//signin get put
app.get('/signin', (req,res) => {
  res.send(`Hello from signin get route`)
})


app.listen(port,() => {
  console.log(`Listening on port http://localhost:${port}`)
})