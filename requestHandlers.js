const {exec} = require('child_process');
const fs = require("fs");
const {readFile} = require('fs');
const querystring = require('querystring');
const formidable = require("formidable");
const path = require('path')

function home(response) {
  console.log("Request handler 'home' was called.");
  var index_path = path.join(__dirname, 'index.html')
  readFile(index_path, function(err, data) {
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

function upload(response, request) {
  console.log("Request handler 'upload' was called.");

  var form = new formidable.IncomingForm();
  console.log('parse ...')
  form.parse(request, function(error, fields, files) {
    console.log('parsing done')
    fs.renameSync(files.upload.path, './tmp/test.png');
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write('received image:<br/>');
    response.write("<img src='/show'>");
    response.end();
  })
}

function show(response) {
  console.log("Request handler 'show' was called.");
  readFile('./tmp/test.png', 'binary', function(error, file) {
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

function show_path(response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(`__dirname     is ${__dirname} <br/>`);
  response.write(`__filename    is ${__filename} <br/>`);
  response.write(`process.cwd() is ${process.cwd()} <br/>`);
  response.write(`./            is ${path.resolve('./')} <br/>`);
  response.end();
}


exports.home = home;
exports.login = login;
exports.upload = upload;
exports.show = show;
exports.show_path = show_path;

