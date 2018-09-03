let command = '//';

let parse = (structured_lines, tokens_l, cursor) => {
  return {
    success: true,
    tokens_l: tokens_l,
    line: cursor,
    cursor: cursor + 1
  };
};

module.exports = { command, parse };
