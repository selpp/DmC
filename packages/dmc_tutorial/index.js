const fs = require('fs');
const { compiler } = require('dmc_compiler')

// READ FILES
let dmc_file = fs.readFileSync('./res/howto.dmc', 'utf-8');

//DMC
let code_generator = (name, file) => {
  let lines = file.split('\n');
  let string = 'let ' + name + ' = "" +\n';
  for(let l = 0; l < lines.length; l++) string += '"' + lines[l].split('"').join('\\"') + '\\n" + \n';
  return string + "\"\\n\";";
};
let seq_generator = (name, file, collapse) => {
  let res = compiler(file); let sequences = res.sequences; let l = [];
  if(collapse) for(let s in sequences) { let sequence = sequences[s];
    for(let a = 0; a < sequence.length; a++) l.push(sequence[a]); }
  else l = sequences;
  return 'let ' + name + ' = ' + JSON.stringify(l, null, 2) + ';';
};

// GENERATE JS STRINGS
let js_string_seq = seq_generator('tuto_seq', dmc_file, false);
let js_string_code = code_generator('tuto_code', dmc_file);

// GENERATE FINAL STRING
let tuto_js = js_string_code + '\n\n' + js_string_seq + '\n\nmodule.exports = { tuto_code, tuto_seq };\n';

// WRITE FILE
fs.writeFileSync('../dmc_website/src/tutorial/tutorial.js', tuto_js, 'utf8');
