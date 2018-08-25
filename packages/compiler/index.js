const parser = require('./lib/parser');
const utils = require('./lib/utils');

let path = './example.dmc';
let success, code = utils.read_file(path);

let program = parser.parse(code);
parser.play(program);
