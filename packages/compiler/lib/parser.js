const logger = require('./logger');

// SYMBOLS
const HEADER = '#';
const S_COMMENT = '//';
const M_COMMENT_B = '/*';
const M_COMMENT_E = '*/';

// ACTIONS
const A_WAIT = 'wait';
const A_MOVE_TO_LINE = 'move to line';
const A_SHOW_LINE = 'show line';
const A_SHOW_LINE_S = 'to';
const A_SHOW_INFO = 'show info';
const A_SHOW_IMAGE = 'show image';
const A_SHOW_VIDEO = 'show video';

// CLEANERS
let clean_lines = (input) => {
  let clean_tabs = (line) => {
    return (line.startsWith('  ')) ?
      '\t' + clean_tabs(line.substr(2)):
      (line.startsWith(' '))?
        clean_tabs(line.substr(1)):
        line;
  };

  let lines = input.split('\n')
    .filter((line) => line != '')
    .map(clean_tabs);
  return lines;
};

// INTERMEDIATE LINE STRUCTURE
let structure_lines = (lines) => {
  return lines.map((line) => {
    let content = line;
    let level = 0;
    while(content.startsWith('\t')) {
      content = content.substr(1);
      level++;
    }
    return { content: content, level: level };
  })
};

// TOKENIZER
let tokenizer = (lines_struct) => {
  let tokens = [];
  let current = 0;

  // START TOKENIZE
  while(current < lines_struct.length) {
    let current_line_struct = lines_struct[current];
    let current_con = current_line_struct.content;
    let current_lvl = current_line_struct.level;

    // START HEADER
    if(current_con.startsWith(HEADER)) {
      let content = current_con.substring(HEADER.length);
      let n_hash = 1;

      while(content.startsWith(HEADER) && n_hash < 6) {
        content = content.substr(HEADER.length);
        n_hash++;
      }

      tokens.push({
        type: 'HEADER ' + n_hash,
        content: content.trim()
      });
      current++;
      continue;
    }
    // END HEADER

    // START ACTION SHOW INFO
    if(current_con.startsWith(A_SHOW_INFO)) {
      let content = current_con.substr(A_SHOW_INFO.length);

      // START MULTILINE
      if(content == '') {
        content = '';

        while(current + 1 < lines_struct.length &&
          lines_struct[current + 1].level > current_lvl) {
          content += lines_struct[++current].content + '\n';
        }

        if(content.endsWith('\n')) {
          content = content.substr(0, content.length - 1);
        }
      }
      // END MULTILINE

      if(content != '') tokens.push({
        type: 'SHOW INFO',
        content: content
      });
      current++;
      continue;
    }
    // END ACTION SHOW INFO

    // START ACTION SHOW IMAGE
    if(current_con.startsWith(A_SHOW_IMAGE)) {
      let content = current_con.substring(A_SHOW_IMAGE.length);

      tokens.push({
        type: 'SHOW IMAGE',
        content: content.trim()
      });
      current++;
      continue;
    }
    // END ACTION SHOW IMAGE

    // START ACTION SHOW VIDEO
    if(current_con.startsWith(A_SHOW_VIDEO)) {
      let content = current_con.substring(A_SHOW_VIDEO.length);

      tokens.push({
        type: 'SHOW VIDEO',
        content: content.trim()
      });
      current++;
      continue;
    }
    // END ACTION SHOW VIDEO

    // START ACTION WAIT
    if(current_con.startsWith(A_WAIT)) {
      let content = current_con.substring(A_WAIT.length);

      tokens.push({
        type: 'WAIT',
        content: content
      });
      current++;
      continue;
    }
    // END ACTION WAIT

    // START ACTION MOVE TO LINE
    if(current_con.startsWith(A_MOVE_TO_LINE)) {
      let content = current_con.substring(A_MOVE_TO_LINE.length).trim();
      let to = null;

      if(content != '') {
        let possible_int = content.split(' ');
        to = parseInt(possible_int[0]);
        if(to != null) content = content.substr(('' + to).length);
      }

      tokens.push({
        type: 'MOVE TO LINE',
        content: [to, content]
      });
      current++;
      continue;
    }
    // END ACTION MOVE TO LINE

    // START ACTION SHOW LINE
    if(current_con.startsWith(A_SHOW_LINE)) {
      let content = current_con.substring(A_SHOW_LINE.length).trim();
      let from = null;
      let to = null;

      if(content != '' && content.includes(A_SHOW_LINE_S)) {
        let possible_ints = content.split(' ');
        if(possible_ints.length >= 3 &&
           possible_ints[1] == A_SHOW_LINE_S) {
          from = parseInt(possible_ints[0]);
          to = parseInt(possible_ints[2]);

          if(to != null && from != null)
            content = content.substr((from + ' to ' + to).length);
        }
      }

      tokens.push({
        type: 'SHOW LINES',
        content: [from, to, content]
      });
      current++;
      continue;
    }
    // END ACTION SHOW LINE

    // START INLINE COMMENT
    if(current_con.startsWith(S_COMMENT)) {
      let content = current_con.substring(S_COMMENT.length).trim();

      tokens.push({
        type: 'COMMENT',
        content: content
      });
      current++;
      continue;
    }
    // END INLINE COMMENT

    // START MULTILINE COMMENT
    if(current_con.startsWith(M_COMMENT_B)) {
      let content = current_con.substring(M_COMMENT_B.length).trim();

      if(current + 1 < lines_struct.length) {
        content = '';

        while(current + 1 < lines_struct.length &&
              !lines_struct[current + 1].content.startsWith(M_COMMENT_E)) {
          content += lines_struct[++current].content + '\n';
        }
      }

      if(content.endsWith('\n')) {
        content = content.substr(0, content.length - 1);
      }

      tokens.push({
        type: 'COMMENT',
        content: content
      });
      current++;
      continue;
    }
    if(current_con.startsWith(M_COMMENT_E)) {
      current++;
      continue;
    }
    // END MULTILINE COMMENT

    logger.warning('DMC TOKENIZER',
      'Unexpected Token: ' + JSON.stringify(current_line_struct));
    current++;
  }
  // END TOKENIZE

  return tokens;
};

// TOKEN CLEANERS
let tokens_cleaner = (tokens) => {
  return tokens.filter(token => {
    if(token.type == 'COMMENT') return false;
    if(token.type == 'SHOW LINES' &&
       (token.content[0] == null ||
        token.content[1] == null)) return false;
    if(token.type == 'MOVE TO LINE' &&
       token.content[0] == null) return false;
    if((token.type == 'SHOW IMAGE' ||
        token.type == 'SHOW VIDEO') &&
       token.content == '') return false;
    return true;
  });
}

// SEQUENCER
let token_sequencer = (tokens) => {
  let sequences = {};
  let current_sequence = -1;
  let current = 0;

  while(current < tokens.length) {
    let token = tokens[current];
    if(token.type.startsWith('HEADER'))
      current_sequence++;

    if(token.type == 'WAIT') {
      current_sequence++;
      current++;
      continue;
    }

    if(sequences[current_sequence] == undefined)
      sequences[current_sequence] = [];
    sequences[current_sequence].push(token);
    current++;
  }

  return sequences;
};

// TRANSFORMER
let transformer = (token_sequences) => {
  let step = (token_sequence) => {
    let s_title = '';
    let seq = [];

    for(let t = 0; t < token_sequence.length; t++) {
      let token = token_sequence[t];
      let params = [];

      if(token.type.startsWith('HEADER')) params.push(token.content);
      else if(token.type.startsWith('MOVE TO LINE')) params.push(token.content[0]);
      else if(token.type.startsWith('SHOW LINES')) {
        params.push(token.content[0]);
        params.push(token.content[1]);
      }
      else params.push(token.content);

      seq.push({ type: token.type, params: params });
    }

    return seq;
  };

  let abstract_sequences = {};
  for(let key in token_sequences) {
    abstract_sequences[key] = step(token_sequences[key]);
  }

  return abstract_sequences;
};

// REVERSE
let reverse = (abstract_sequences) => {
  let abstract_sequences_r = {};

  /* TODO:

    * REVERSE EVERY SEQUENCE OF ACTIONS
    * CHANGE PLACE IN SEQUENCE IF NEEDED
    * (MOVE TO LINE SHOULDN'T BE AT THE SAME PLACE)

  */

  return abstract_sequences_r;
};

// PARSER METHODE
let parse = (code) => {
  let lines =  clean_lines(code);
  let lines_struct = structure_lines(lines);
  let tokens = tokenizer(lines_struct);
  let cleaned_tokens = tokens_cleaner(tokens);
  let token_sequences = token_sequencer(cleaned_tokens);
  let abstract_sequences = transformer(token_sequences);
  let abstract_sequences_r = reverse(abstract_sequences);

  return {
    forward: abstract_sequences,
    backward: abstract_sequences_r
  };
};

// PLAYER
function play (program, backward = false) {
  if(!backward) {
    for(let s in program.forward) {
      let sequence = program.forward[s];
      console.log('======== NEW SEQUENCE =======');
      for(let a = 0; a < sequence.length; a++) {
        let action = sequence[a];
        console.log(action);
      }
      console.log('==============================\n');
    }
  } else {
    console.log('BACKWARD IS NOT IMPLEMENTED YET!')
  }
};

module.exports = { parse, play };
