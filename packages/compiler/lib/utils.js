const fs = require('fs');
const logger = require('./logger');

let read_file = (file_path) => {
  try {
    return true, fs.readFileSync(file_path, 'utf-8');
  } catch (err) {
    logger.error('DMC FILE READER', err);
    return false, null;
  }
};

module.exports = { read_file };
