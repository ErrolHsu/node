const server = require('./server');
const router = require('./router');
const requestHandlers = require("./requestHandlers");

var handle = {}
handle['/'] = requestHandlers.home;
handle['/login'] = requestHandlers.login;
handle['/upload'] = requestHandlers.upload;
handle['/show'] = requestHandlers.show;
handle['/show_path'] = requestHandlers.show_path;

server.start(router.route, handle);
