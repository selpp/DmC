let command = 'show image ';

let create = (url) => {
  return {
    type: 'SHOW IMAGE',
    params: {
      url: url
    }
  };
};

let parse = (structured_lines, tokens_l, cursor) => {
  let success = true;

  let sl = structured_lines[cursor];
  let sl_content = sl.content;
  sl_content = sl_content.substr(command.length).trim();

  if(sl_content == '') sucess = false;
  else {
    tokens_l.push(create(sl_content));
    tokens_l.push({ type: 'WAIT' });
  }

  return {
    sucess: success,
    tokens_l: tokens_l,
    line: cursor,
    cursor: cursor + 1
  };
};

module.exports = { command, parse };
