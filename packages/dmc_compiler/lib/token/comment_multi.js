let command = '/*';

let parse = (structured_lines, tokens_l, cursor) => {
  let success = true;

  let sl = structured_lines[cursor];
  let sl_content = sl.content;
  sl_content = sl_content.substr(command.length).trim();

  let cursor_gap = cursor;
  while(cursor_gap < structured_lines.length &&
    !structured_lines[cursor_gap].content.includes(command.split('').reverse().join(''))
  ) cursor_gap++;
  if(cursor_gap < structured_lines.length &&
    structured_lines[cursor_gap].content.includes(command.split('').reverse().join(''))
  ) cursor_gap++;

  return {
    sucess: success,
    tokens_l: tokens_l,
    line: cursor,
    cursor: (cursor_gap == cursor)? cursor + 1: cursor_gap
  };
};

module.exports = { command, parse };
