const parser = require('./lib/parser');
const logger = require('./lib/logger');
const fs = require('fs');

let compiler = (code) => { return parser.parse(code); };

module.exports = { compiler };
