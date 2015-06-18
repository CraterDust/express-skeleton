var pages = require('./pages');

module.exports = function routes(app) {
  app.use('/', pages);

  // 404
  app.use(function PageNotFound(req, res) {
    res.redirect('/');
  });
};
