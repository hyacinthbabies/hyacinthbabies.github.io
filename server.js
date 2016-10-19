// "start": "webpack-dev-server --hot --inline",
var config=require('./webpack.config.js');
var express = require('express');
var path = require('path');
var webpack = require('webpack');
//加载webpack
var webpackMiddleware =require('webpack-dev-middleware');
//热加载webpack
var webpackHotMiddleware = require('webpack-hot-middleware');
var bodyParser = require('body-parser');
var app = express();
const compiler = webpack(config);
app.use(webpackMiddleware(compiler, {
    publicPath: '/',
    stats: {
        colors: true,
        progress: true
    }
}));
app.use(webpackHotMiddleware(compiler));


var mongoose = require('mongoose');
var dbName = 'shqTest';
var url = 'mongodb://localhost:27017/' + dbName;
var mongoOptions = {
    server: {
        socketOptions: {
            keepAlive: 1
        }
    }
};

mongoose.connect(url, mongoOptions);
mongoose.connection.on('error', function(err) {
    console.log('Mongo Error:' + err);
}).on('open', function() {
    console.log('Connection opened');
});

// rewrite to load static resources
app.use(express.static('stylesheets'));
app.use(express.static('javascripts'));
// static views
app.get('/', function(req, res) {
    res.sendfile('index.html', { root: path.join(__dirname)});
});
// app.get('/study/study.html', function(req, res) {
//     res.sendfile('study/study.html');
// });
// app.get('/study/webpackstudy.html', function(req, res) {
//     res.sendfile('study/webpackstudy.html');
// });
// app.get('/header.html', function(req, res) {
//     res.sendfile('bootstrap/header.html');
// });
// app.get('/button.html',function(req,res){
// 	res.sendfile('bootstrap/button.html');
// })
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '8080');
app.set('port', port);

//Create HTTP server
var server = http.createServer(app);
server.listen(port);
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}