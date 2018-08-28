let command = 'show line';

let create = (from, to) => {
  return {
    type: 'SHOW LINES',
    params: {
      from: from,
      to: to
    }
  };
};

let parse = (structured_lines, tokens_l, cursor) => {
  let success = true;

  let sl = structured_lines[cursor];
  let sl_content = sl.content;
  sl_content = sl_content.substr(command.length).trim();

  if(sl_content.length == '' || !sl_content.includes(' to ')) success = false;
  else {
    let params = sl_content.split(' ');
    if(params.length < 3) success = false;
    else {
      let from = parseInt(params[0]);
      let to = parseInt(params[2]);
      if(from == null || to == null) sucess = false;
      else tokens_l.push(create(from, to));
    }
  }

  return {
    success: success,
    tokens_l: tokens_l,
    line: cursor,
    cursor: cursor + 1
  };
};

module.exports = { command, parse };
