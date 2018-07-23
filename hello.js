const EventEmitter = require('events');

var url = 'http://google.com';

class Logger extends EventEmitter {
  log(msg) {
    console.log(msg);

    this.emit('msgLogged', {id: 1, url: 'http://'});
  }
}

module.exports = new Logger();
