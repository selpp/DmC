const logger = require('./logger');
const cleaners = require('./cleaners');

// IMPORT TOKENS
let sort_tokens_import = (tokens) => {
  let sortable = [];
  for(let token in tokens) sortable.push([token, tokens[token]]);
  sortable.sort((a, b) => a[1].order - b[1].order);
  let obj = {};
  for(let s = 0; s < sortable.length; s++) obj[sortable[s][0]] = sortable[s][1];
  return obj;
}
const tokens = sort_tokens_import(require('./tokens'));

// INTERMEDIATE LINE STRUCTURE
let line_structurer = (lines) => {
  return lines.map((line) => {
    let content = line; let level = 0;
    while(content.startsWith('\t')) { content = content.substr(1); level++; }
    return { content: content, level: level };
  });
};

// TOKENIZER
let tokenizer = (structured_lines) => {
  let warnings = [];
  let cursor = 0; let tokens_l = []; let n = structured_lines.lengths;
  while(cursor < structured_lines.length) {
    let content = structured_lines[cursor].content;
    let line = 0; let success = true; let next = false;
    for(let token in tokens) {
      if(content.startsWith(tokens[token].struct.command)) {
          let res = tokens[token].struct.parse(structured_lines, tokens_l, cursor);
          tokens_l = res.tokens_l; cursor = res.cursor; line = res.lines; success = res.success;
          if(success == false) warnings.push({ type: 'PARAMS', line: cursor, content: content });
          next = true; break;
      }
    }
    if(next) continue;
    if(content != '') warnings.push({ type: 'TOKEN', line: cursor, content: content });
    cursor++;
  }
  return { warnings: warnings, tokens: tokens_l };
};

// SEQUENCER
let sequencer = (tokens) => {
  let sequences = {};
  let t = 0; let s = 0;
  while(t < tokens.length) {
    let token = tokens[t]; let type = token.type;
    if(t != 0 && (type == 'HEADER' || type == 'WAIT')) s++;
    if(sequences[s] == null) sequences[s] = [];
    sequences[s].push(token); t++;
  }
  return sequences;
};

// PARSER METHODE
let parse = (code) => {
  let lines = code.split('\n').map(cleaners.tabs);
  let structured_lines = line_structurer(lines);
  let res = tokenizer(structured_lines);
  let warnings = res.warnings; let tokens = res.tokens;
  let sequences = sequencer(tokens);
  return { warnings: warnings, sequences: sequences };
};

module.exports = { parse };
