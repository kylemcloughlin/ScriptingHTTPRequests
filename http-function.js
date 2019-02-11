
var https = require('https');
var input = {
    hostname: 'sytantris.github.io',
    path: '/http-examples/step4.html'
};


module.exports = function getHTML(input, callback) {


    https.get(input, function (response) {
        response.setEncoding('utf8')
        var html = '';
        response.on('data', printHTML)

        response.on('end', function() {
            console.log('done');            
        })

        });


};

function printHTML (html) {
    console.log(html);
  }

  //getHTML(input, printHTML);