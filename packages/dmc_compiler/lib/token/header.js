let command = '#';

let create = (lvl, content) => {
  return {
    type: 'HEADER',
    params: {
      lvl: lvl,
      content: content
    }
  };
};

let parse = (structured_lines, tokens_l, cursor) => {
  let success = true;

  let sl = structured_lines[cursor];
  let sl_content = sl.content;
  let lvl = 0;

  while(sl_content.startsWith(command) && lvl <= 6)
  { sl_content = sl_content.substr(command.length); lvl++; }

  if(lvl == 0 || sl_content == '') success = false;
  else {
    tokens_l.push(create(lvl, sl_content.trim()));
    tokens_l.push({ type: 'WAIT' });
  }

  return {
    success: success,
    tokens_l: tokens_l,
    line: cursor,
    cursor: cursor + 1
  };
};

module.exports = { command, parse };
