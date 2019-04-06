var https = require('https');

console.log('I did it!');

////

var options = {
  host: 'www.google.com',
  path: '/'
};

// // called by https when the request is made.
// var callback = function() {
//   console.log('In response handler callback!'); // that prints last!!!
// }

// // called by https when the request is made.
// var callback = function(response) {
//   console.log('In response handler callback!');
//   console.log('Response: ', response);
// }

// called by https when the request is made.
var callback = function(response) {
  console.log('In response handler callback!');

  response.on('data', function(chunk) {
    console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
    console.log(chunk.toString());
  });
}

console.log("I'm about to make the request!");

https.request(options, callback).end();

console.log("I've made the request!");

////


