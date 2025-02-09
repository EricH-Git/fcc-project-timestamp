// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


// MY CODE //
app.get('/api/timestamp/', (req, res) => {
  res.json({ 'unix': new Date().valueOf(), 'utc': new Date().toUTCString() });
});

app.get('/api/timestamp/:date?', (req, res) => {

  let userDate = req.params.date;

  if (new Date(userDate).toString() !== 'Invalid Date') {
      res.json({ 'unix': new Date(userDate).valueOf(), 'utc': new Date(userDate).toUTCString() });
  } else if (new Date(parseInt(userDate)).toString() !== 'Invalid Date') {
    res.json({ 'unix': parseInt(userDate), 'utc': new Date((parseInt(userDate))).toUTCString() });
  } else {
    res.json({ 'error': 'Invalid Date' });
  }; 

});
