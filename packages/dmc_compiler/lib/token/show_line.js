let command = 'show line ';

let create = (from, to) => {
  return {
    type: 'SHOW LINE',
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

  if(sl_content == '') success = false;
  else {
    let params = sl_content.split(' ');
    if(params.length == 1) {
      let from = parseInt(params[0]);
      if(typeof(from) != typeof(1)) success = false;
      else tokens_l.push(create(from, null));
    }
    else if(params.length == 3) {
      let from = parseInt(params[0]);
      let to = parseInt(params[2]);
      if(params[1] != 'to' || typeof(from) != typeof(1) || typeof(to) != typeof(1)) success = false;
      else tokens_l.push(create(from, to));
    }
    else success = false;
  }

  return {
    success: success,
    tokens_l: tokens_l,
    line: cursor,
    cursor: cursor + 1
  };
};

module.exports = { command, parse };
