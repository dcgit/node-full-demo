const apiRoutes = require('./api_routes');
const webRoutes = require('./web_routes');

module.exports = function(app, db) {
  apiRoutes(app, db);
  webRoutes(app, db);
  // Other route groups could go here, in the future
};
