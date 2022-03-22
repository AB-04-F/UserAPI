require('dotenv').config();
var express = require('express');
// var compression = require('compression');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
// view engine setup
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var http = require('http').Server(app);
http.listen(process.env.ApiPort, function() {
    console.log('listening on *:' + process.env.ApiPort);
});
app.get('/', function(req, res) {
    res.send('server working');
});
// app.use(express.static(__dirname + '/'));

//api route
app.use('/api', require('./controllers/api'));