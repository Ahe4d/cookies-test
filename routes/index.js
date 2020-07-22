module.exports = function (app) {
  var user = require('./user');

  app.use('/api', user)
};