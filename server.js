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
//运行时向数据库user插入一条数据（实验）
// var tes = require('./src/test.js');
// tes.list();
var user = require('./src/test.js');
app.use('/api/users',user.list);
// rewrite to load static resources
app.use(express.static(path.join(__dirname)));
// static views
app.get('/*', function(req, res) {
    res.sendfile('index.html', { root: path.join(__dirname)});
});

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