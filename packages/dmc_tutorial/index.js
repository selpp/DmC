const fs = require('fs');
const { compiler } = require('dmc_compiler')

// READ FILES
let dmc_file = fs.readFileSync('./res/howto.dmc', 'utf-8');

//DMC
let dmc_generator = (name, file, collapse) => {
  let res = compiler(file); let sequences = res.sequences; let l = [];
  if(collapse) for(let s in sequences) { let sequence = sequences[s];
    for(let a = 0; a < sequence.length; a++) l.push(sequence[a]); }
  else l = sequences;
  return 'let ' + name + ' = ' + JSON.stringify(l, null, 2) + ';';
};

// GENERATE JS STRINGS
let js_string_dmc = dmc_generator('tuto_dmc', dmc_file, false);

// GENERATE FINAL STRING
let tuto_js = js_string_dmc + '\n\nmodule.exports = { tuto_dmc };\n';

// WRITE FILE
fs.writeFileSync('../dmc_website/src/tutorial/tutorial.js', tuto_js, 'utf8');
