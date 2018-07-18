var http = require('http');
var url = require('url');

function start(route, handle) {
  function onRequqest(req, res) {
    var pathname = url.parse(req.url).pathname;

    console.log(`Request for ${pathname} received.`);

    res.writeHead(200, {"Content-Type" : "text/plain"});
    var content = route(handle, pathname);
    res.write(content);
    res.end();
  }

  http.createServer(onRequqest).listen(3000);
  console.log("Server has started.");  
}

exports.start = start;
