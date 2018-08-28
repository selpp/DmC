let command = 'show info';

let create = (content) => {
  return {
    type: 'SHOW INFO',
    params: {
      content: content
    }
  };
};

let parse = (structured_lines, tokens_l, cursor) => {
  let success = true;

  let sl = structured_lines[cursor];
  let sl_content = sl.content;
  sl_content = sl_content.substr(command.length).trim();
  let sl_level = sl.level;

  let maybe_multi = (sl_content == '');
  let cursor_gap = cursor;

  if(maybe_multi) {if(cursor_gap + 1 >= structured_lines.length ||
       structured_lines[cursor_gap + 1].level <= sl_level) success = false;
    else {
      let content = '';

      cursor_gap++;
      while(cursor_gap < structured_lines.length &&
            structured_lines[cursor_gap].level > sl_level) {
        content += structured_lines[cursor_gap].content + '\n';
        cursor_gap++;
      }

      if(content == '') success = false;
      else {
        tokens_l.push(create(content));
        tokens_l.push({ type: 'WAIT' });
      }
    }
  }
  else {
    tokens_l.push(create(sl_content));
    tokens_l.push({ type: 'WAIT' });
  }

  return {
    sucess: success,
    tokens_l: tokens_l,
    line: cursor,
    cursor: (cursor_gap == cursor)? cursor + 1: cursor_gap
  };
};

module.exports = { command, parse };
