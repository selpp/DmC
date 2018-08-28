const parser = require('./lib/parser');

let compiler = (code) => { return parser.parse(dmc_code); };

module.exports = {  compiler };
