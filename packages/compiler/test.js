const parser = require('./lib/parser');
const logger = require('./lib/logger');
const fs = require('fs');

function example () {
  let read_file = (file_path) => {
    try { return true, fs.readFileSync(file_path, 'utf-8'); }
    catch (err) { logger.error('DMC FILE READER', err); return false, null; }
  };

  function play (input) {
    let warnings = input.warnings;
    for(let w = 0; w < warnings.length; w++) {
      let warning = warnings[w]; let type = warning.type; let line = warning.line; let content = warning.content;
      if(type == 'TOKEN') logger.warning('DMC TOKENIZER', 'Unexpected TOKEN line ' + line + ': ' + content);
      else if(type == 'PARAMS') logger.warning('DMC TOKENIZER', 'Wrong TOKEN\'s params line ' + line + ': ' + content);
    }

    let sequences = input.sequences;
    for(let s in sequences) {
      let sequence = sequences[s];
      console.log('======== NEW SEQUENCE =======');
      for(let a = 0; a < sequence.length; a++) { console.log(sequence[a]); }
      console.log('==============================\n');
    }
  };

  let path = './example.dmc';
  let success, code = read_file(path);
  let res = parser.parse(code);
  play(res);
};
example();
