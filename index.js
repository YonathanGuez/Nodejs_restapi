const server = require('./server.js');

server.listen(3000, '0.0.0.0', () => {
  console.log('Server has started!');
});
