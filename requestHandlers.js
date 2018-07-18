var {exec} = require('child_process')

function home(response) {
  console.log("Request handler 'home' was called.");

  exec("ls -lah", function(error, stdout, stderr) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(stdout);
    response.end();
  })
}

function login(response) {
  console.log("Request handler 'login' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("you are in Login");
  response.end();
}

function upload(response) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("you are in Upload");
  response.end();
}

exports.home = home;
exports.login = login;
exports.upload = upload;