const comment_multi = require('./token/comment_multi');
const comment = require( './token/comment');
const header = require( './token/header');
const open = require( './token/open');
const move_to_line = require( './token/move_to_line');
const show_image = require( './token/show_image');
const show_info = require( './token/show_info');
const show_line = require( './token/show_line');
const show_maths = require( './token/show_maths');
const show_youtube = require( './token/show_youtube');
const show_sound = require( './token/show_sound');
const show_qrcode = require('./token/show_qrcode');
const show_quote = require('./token/show_quote');
const show_warn = require('./token/show_warn');
const wait = require( './token/wait');

module.exports = {
  'comment_multi': { order: 1 , struct: comment_multi },
  'comment': { order: 2 , struct: comment },
  'header': { order: 3 , struct: header },
  'open': { order: 5, struct: open },
  'move_to_line': { order: 4 , struct: move_to_line },
  'show_image': { order: 4 , struct: show_image },
  'show_info': { order: 5 , struct: show_info },
  'show_quote': { order: 5 , struct: show_quote },
  'show_warn': { order: 5 , struct: show_warn },
  'show_line': { order: 4 , struct: show_line },
  'show_maths': { order: 5 , struct: show_maths },
  'show_youtube': { order: 5 , struct: show_youtube },
  'show_sound': { order: 5 , struct: show_sound },
  'show_qrcode': {order: 5, struct: show_qrcode},
  'wait': { order: 6, struct: wait }
};
