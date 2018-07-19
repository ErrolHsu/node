var {exec} = require('child_process')
var {readFile} = require('fs')
var querystring = require('querystring');

function home(response) {
  console.log("Request handler 'home' was called.");

  // exec("ls -lah", function(error, stdout, stderr) {
  //   response.writeHead(200, {"Content-Type": "text/plain"});
  //   response.write(stdout);
  //   response.end();
  // })
  // var body = 'xx'

  readFile('index.html', function(err, data) {
    if (err) throw err;
    var body = data.toString();
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
  })

}

function login(response) {
  console.log("Request handler 'login' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("you are in Login");
  response.end();
}

function upload(response, postData) {
  console.log("Request handler 'upload' was called.");

  data = querystring.parse(postData).text

  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write(`you post ${data}`);
  response.end();
}

exports.home = home;
exports.login = login;
exports.upload = upload;