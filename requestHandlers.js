var {exec} = require('child_process');
var {readFile} = require('fs');
var querystring = require('querystring');

function home(response) {
  console.log("Request handler 'home' was called.");
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

function show(response, postData) {
  console.log("Request handler 'show' was called.");
  readFile('./tmp/clock.png', 'binary', function(error, file) {
    if(error) {
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.write(`${error}\n`);
      response.end();
    } else {
      response.writeHead(200, {"Content-Type": "image/png"});
      response.write(file, 'binary');
      response.end();
    }
  })
}



exports.home = home;
exports.login = login;
exports.upload = upload;
exports.show = show;