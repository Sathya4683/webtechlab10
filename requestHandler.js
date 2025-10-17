// This module provides a function for serving files.

const fs = require('fs');
const logger = require('./logger');

/**
 * Serves a file to the client.
 * If the file is not found, it serves a fallback page.
 * @param {string} fileName - The name of the file to serve.
 * @param {http.ServerResponse} res - The response object.
 */
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
