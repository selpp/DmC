const fs = require('fs');
const { compiler } = require('dmc_compiler')

// READ FILES
let js_file = fs.readFileSync('./res/tutorial.js', 'utf-8');
let dmc_file = fs.readFileSync('./res/tutorial.dmc', 'utf-8');
let adv_file = fs.readFileSync('./res/advices.dmc', 'utf-8');

// JS
let js_generator = (name, file) => {
  let lines = file.split('\n');
  let js = 'let ' + name + ' = \'\' +\n';
  lines.forEach(function(line) { js += '\'' + line + '\\n\' +\n'; });
  return js + '\'\\n\';';
};

//DMC
let dmc_generator = (name, file, collapse) => {
  let res = compiler(file); let sequences = res.sequences; let l = [];
  if(collapse) for(let s in sequences) { let sequence = sequences[s];
    for(let a = 0; a < sequence.length; a++) l.push(sequence[a]); }
  else l = sequences;
  return 'let ' + name + ' = ' + JSON.stringify(l, null, 2) + ';';
};

// GENERATE JS STRINGS
let js_string_js = js_generator('tuto_js', js_file);
let js_string_dmc = dmc_generator('tuto_dmc', dmc_file, false);
let js_string_adv = dmc_generator('advices', adv_file, true);

// GENERATE FINAL STRING
let tuto_js = js_string_js + '\n\n' + js_string_dmc + '\n\nmodule.exports = { tuto_js, tuto_dmc };\n';
let adv_js = js_string_adv + '\n\nmodule.exports = { advices };\n';

// WRITE FILE
fs.writeFileSync('../dmc_website/src/tutorial/tutorial.js', tuto_js, 'utf8');
fs.writeFileSync('../dmc_website/src/tutorial/advices.js', adv_js, 'utf8');
