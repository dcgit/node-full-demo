global.btoa = function (str) {
return new Buffer(str).toString('base64');
};

global.atob = function (b64Encoded) {
//return new Buffer.from(b64Encoded, 'base64').toString();
};

global.appKeys = {
  'CookieAuthToken':'DCAuth-Token'
}



