require('./common.js');
var appSettings = require('./settings.js');

var fs = require('fs');

var express = require('express');
var cookieParser = require('cookie-parser');


//APP SETUP
var app = express();
app.use(cookieParser());

//ROUTES
app.get('/', function (req, res) {
  setCookie(res,"hello","world");
  res.send('Hello World!');
  console.log("Cookies :  ", (req.cookies||"no_cookies") );
});

app.get('/login', function (req, res) {
  login(res,'admin','password').then(loginResult => {
  if ( loginResult )
  {
  res.send('Login complete');
  }
  else
  {
  res.send('Login Invalid');
  }
  console.log("Cookies :  ", (req.cookies||"no_cookies") ); 
  }).catch(err => {
    console.error('Error attempting login');
    res.send('Login Failed');
  });

});

app.get('/logout', function (req, res) {
  logout();
  res.send('Logout complete');
  console.log("Cookies :  ", (req.cookies||"no_cookies") );
});

require('./routes')(app, {});


var server = app.listen(appSettings.SERVER.PORT, function () {

  let host = "localhost";
  console.log('Listening at http://%s:%s', 
		host, 
		appSettings.SERVER.PORT);

});


//SESSION MGMT
function login(res, username, pass) {
  return new Promise(function(resolve,reject){
  
  fs.readFile('serverSecret2.enc', 'utf8', function(err, serverSecretKey) {
    if (err) { console.error("error reading app secret"); reject(false);return;}

    console.log("Loaded Secret Key %s", serverSecretKey); 
    let token = btoa(username);
    setCookie(res, appKeys.CookieAuthToken, token);
    resolve(true);
  });
  });

}

function logout() {
  clearCookie(appKeys.CookieAuthToken);
  console.log("Logout complete.");
}

//APP UTILS
function setCookie(res,key,value) {
  res.cookie(key , value, {expire : new Date() + 9999});
}
