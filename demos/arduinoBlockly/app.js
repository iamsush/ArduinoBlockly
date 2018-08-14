var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var arduino = require('./functionGen/arduinoCode.js');


var app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.post('/getCode', function(req, res) {
  let content = arduino.getCode(req.body.high, req.body.low);
  arduino.writeToFile(path.join(__dirname, 'tmp', 'arduinoFile.ino'), content);
  res.status(200).json({ msg : content});
});


app.get('/compileCode', function(req, res) {
  console.log('ok');
  arduino.compileCode();
  res.status(200).json({ msg : 'Code Compiled'});
});

// app.get('/runCode', function(req, res) {
//   arduino.runCode();
//   res.status(200).json({ msg : 'Arduino has started working'});
// });

app.listen(3000, () => console.log('Sample Arduino App on port 3000'))
