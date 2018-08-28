const parser = require('./lib/parser');

let compile = (code) => { return parser.parse(dmc_code); };

module.exports = { compile };
