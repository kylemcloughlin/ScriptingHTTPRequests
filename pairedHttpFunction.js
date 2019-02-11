var https = require('https');
var imported = require('./http-function');
var input = {
    host: 'sytantris.github.io',
    path: '/http-examples/step5.html'
  };


  

  function printHTML (html) {
    console.log(html);
  }

  imported(input, printHTML);
