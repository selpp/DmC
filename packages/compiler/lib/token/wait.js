let command = 'wait';

let create = () => { return { type: 'WAIT' }; };

let parse = (structured_lines, tokens_l, cursor) => {
  let success = true;
  tokens_l.push(create());

  return {
    sucess: success,
    tokens_l: tokens_l,
    line: cursor,
    cursor: cursor + 1
  };
};

module.exports = { command, parse };
