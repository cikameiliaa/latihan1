const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Halo dari my-app');
});
server.listen(3000);
