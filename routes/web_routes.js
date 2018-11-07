module.exports = function(app, db) {
 app.all('/*.enc', function (req, res) {
    //this is only temporary since secret is for testing only
    res.send('Unsupported');
    console.log("Attempt to access server secret");
  });
};
