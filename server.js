// This is the main entry point of the application.
// It creates an HTTP server and listens for requests.

const http = require('http');
const router = require('./router');

const server = http.createServer(router);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
