const fs = require('fs');

function logError(errorMessage) {
  const logMessage = `[${new Date().toISOString()}] ${errorMessage}\n`;
  fs.appendFile('error.log', logMessage, (err) => {
    if (err) {
      console.error('Error writing to log file:', err);
    }
  });
}

module.exports = {
  logError,
};

