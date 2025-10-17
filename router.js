const url = require('url');
const requestHandler = require('./requestHandler');

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
