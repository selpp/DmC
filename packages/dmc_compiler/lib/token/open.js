let command = 'open';

let create = (source) => {
  return {
    type: 'OPEN',
    params: {
      source: source
    }
  };
};

let parse = (structured_lines, tokens_l, cursor) => {
  let success = true;

  let sl = structured_lines[cursor];
  let sl_content = sl.content;
  sl_content = sl_content.substr(command.length).trim();

  if(sl_content == '') success = false;
  else {
    tokens_l.push(create(sl_content));
    tokens_l.push({ type: 'MOVE TO', params: { to: 1 } });
  }

  return {
    success: success,
    tokens_l: tokens_l,
    line: cursor,
    cursor: cursor + 1
  };
};

module.exports = { command, parse };
