const fs = require('fs');
const logger = require('./logger');

function serveFile(fileName, res) {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      logger.logError(`Error reading ${fileName}: ${err}`);
      if (fileName === 'index.html') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Home Page</h1>');
      } else if (fileName === 'about.html') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>About Page</h1>');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      }
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
}

module.exports = {
  serveFile,
};
