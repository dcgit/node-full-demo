module.exports = function(app, db) {

  app.get('/api/*', function (req, res) {
    res.send('API Call');
    console.log("API Call");
  });

  app.get('/api/ping', function (req, res) {
    res.send('Pong');
    console.log("API Call");
    console.log(req.body)
  });

  app.post('/api/ping', function (req, res) {
    res.send('API Call Ping-Post');
    console.log("API Call");
    console.log(req.body)
  });
};
