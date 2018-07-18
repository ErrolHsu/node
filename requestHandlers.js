function home() {
  console.log("Request handler 'home' was called.");
  return "you are in Home";
}

function login() {
  console.log("Request handler 'login' was called.");
  return "you are in Login"
}

function upload() {
  console.log("Request handler 'upload' was called.");
  return "you are in Upload"
}

exports.home = home;
exports.login = login;
exports.upload = upload;