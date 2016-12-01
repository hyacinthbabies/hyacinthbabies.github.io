'use strict';
/**
 * Module dependencies.
 */
var usersController = require('./test.js');
module.exports = function(app) {
  // User Routes
  app.use('/api/users',usersController.list);
  app.use('/api/postContent',usersController.insert);
};