const parser = require('./lib/parser');
const utils = require('./lib/utils');

function example () {
  let path = './example.dmc';
  let success, code = utils.read_file(path);

  let program = parser.parse(code);
  parser.play(program);
};
example();

let compiler = (dmc_code) => {
  let program = parser.parse(dmc_code);
  return program;
};

module.exports = {
  compiler
};
