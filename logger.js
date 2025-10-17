// This module provides a function for logging error messages to a file.

const fs = require('fs');

/**
 * Appends an error message to the error.log file.
 * @param {string} errorMessage - The error message to log.
 */
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

