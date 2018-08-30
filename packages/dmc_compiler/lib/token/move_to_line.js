let command = 'move to line ';

let create = (to) => {
  return {
    type: 'MOVE TO',
    params: {
      to: to
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
    let to = parseInt(sl_content);
    if(typeof(to) == typeof(1)) success = false;
    else tokens_l.push(create(to));
  }

  return {
    sucess: success,
    tokens_l: tokens_l,
    line: cursor,
    cursor: cursor + 1
  };
};

module.exports = { command, parse };
