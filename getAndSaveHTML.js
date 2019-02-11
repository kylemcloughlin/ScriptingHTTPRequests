input = process.argv.slice(2);

var https = require('https')

function getAndPrintHTML() {

  var requestOptions = {
    host: input[0],
    path: input[1]
  };


  https.get(requestOptions, function (response) {
    response.setEncoding('utf8')
    var output = '';
    response.on('data', function (data) {
      output += data;

    })



    response.on('end', function () {

      console.log(output);

    });
  });
}



getAndPrintHTML();