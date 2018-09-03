const comment_multi = require('./token/comment_multi');
const comment = require( './token/comment');
const header = require( './token/header');
const move_to_line = require( './token/move_to_line');
const show_image = require( './token/show_image');
const show_info = require( './token/show_info');
const show_line = require( './token/show_line');
const show_youtube = require( './token/show_youtube');
const show_qrcode = require('./token/show_qrcode');
const wait = require( './token/wait');

module.exports = {
  'comment_multi': { order: 1 , struct: comment_multi },
  'comment': { order: 2 , struct: comment },
  'header': { order: 3 , struct: header },
  'move_to_line': { order: 4 , struct: move_to_line },
  'show_image': { order: 4 , struct: show_image },
  'show_info': { order: 5 , struct: show_info },
  'show_line': { order: 4 , struct: show_line },
  'show_youtube': { order: 5 , struct: show_youtube },
  'show_qrcode': {order: 5, struct: show_qrcode},
  'wait': { order: 6, struct: wait }
};
