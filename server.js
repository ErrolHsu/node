var http = require('http');
var url = require('url');

function start(route, handle) {
  function onRequqest(request, response) {
    var pathname = url.parse(request.url).pathname;

    console.log(`${request.method}  Request for ${pathname} received.`);

    route(handle, pathname, response, request)
  }

  http.createServer(onRequqest).listen(3000);
  console.log("Server has started.");  
}

exports.start = start;
