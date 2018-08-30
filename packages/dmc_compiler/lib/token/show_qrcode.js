var qrcode = require("qr-image");

let command = 'show qrcode ';

let create = (data, url) => {
  return {
    type: 'SHOW QRCODE',
    params: {
       base64: data,
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
    try {
        b64 = qrcode.imageSync(sl_content, {type: 'svg'}).toString('base64');
        tokens_l.push(create(b64, sl_content));
        tokens_l.push({ type: 'WAIT' });
        console.log(b64);
    } catch(err) {
        console.error(err);
        success = false
    }
  }

  return {
    sucess: success,
    tokens_l: tokens_l,
    line: cursor,
    cursor: cursor + 1
  };
};

module.exports = { command, parse };
