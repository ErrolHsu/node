let logger = require('./hello.js');

logger.on('msgLogged', (arg) => {
  console.log('Listener called', arg)
});

logger.log('xxxxx')
