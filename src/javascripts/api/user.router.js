var users = require('./user.js');
module.exports = function(app) {
  // User Routes
  app.route('/api/users')
    .get(users.insert);
};