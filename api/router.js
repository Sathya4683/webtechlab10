// This module contains the routing logic for the application.

const url = require('url');
const requestHandler = require('./requestHandler');

/**
 * Routes incoming requests to the appropriate request handler.
 * @param {http.IncomingMessage} req - The request object.
 * @param {http.ServerResponse} res - The response object.
 */
function router(req, res) {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  if (pathname === '/') {
    requestHandler.serveFile('index.html', res);
  } else if (pathname === '/about') {
    requestHandler.serveFile('about.html', res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page Not Found');
  }
}

module.exports = router;
