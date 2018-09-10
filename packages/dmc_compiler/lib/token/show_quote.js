// var Scraper = require ('bing-image-scraper')
// var bing = new Scraper();
// var request = require('request');
// var cheerio = require('cheerio');

let command = 'show quote from';


// let get_face = (name) => {

//   var face = null;
//   var end = false;

//   var roptions = {
//     'url': `http://www.bing.com/images/search?q=${encodeURIComponent(name)}&view=detailv2`,
//     'User-Agent': options.userAgent || 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36'
//   };

//   var result = [], num = options.num;

//   request(roptions, function (err, response, body) {
//     if (!err && response.statusCode === 200) {
//         // extract all items, go to next page if exist
//         var $ = cheerio.load(body);
//         $('.item a[class="thumb"]').each(function () {
//             var url = $(this).attr('href');

//             var detail = $(this).parent().find('.fileInfo').text();
//             face = url;
//             var item = {
//                 url: url,
//                 thumb: $(this).find('img').attr('src'),
//                 width: detail.split(' ')[0],
//                 height: detail.split(' ')[2],
//                 format: detail.split(' ')[3],
//                 size: detail.split(' ')[4],
//                 unit: detail.split(' ')[5]
//             };

//             result.push(item);
//         });

//         if (num && result.length > num) {
//             var out = result.slice(0, num);
//             return //resolve(result.slice(0,num));
//         }

//         // search for current page and select next one
//         var page = $('li a[class="sb_pagS"]').parent().next().find('a').attr('href');
//         if (page) {
//             extract('http://www.bing.com' + page + '&view=detailv2')
//         } else {
//             // resolve(result);
//         }

//     } else {
//         // self.emit('end', result);
//         // resolve(result);
//     }
//   });

//   // require('deasync').loopWhile(function() {return !end})
//   console.log('Face for '+name+' '+face)

//   return face;
// }

let create = (from, content) => {
  // var f = null;
  // try {
  //   f = get_face(from)
  // } catch(err) {
  //   console.log(err)
  // }

  return {
    type: 'SHOW QUOTE',
    params: {
      from: from,
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

  let from = sl_content;
  let cursor_gap = cursor;

  if(from != '') {if(cursor_gap + 1 >= structured_lines.length ||
       structured_lines[cursor_gap + 1].level <= sl_level) success = false;
    else {
      let content = '';

      cursor_gap++;
      while(cursor_gap < structured_lines.length &&
            structured_lines[cursor_gap].level > sl_level) {
        let diff_indent = structured_lines[cursor_gap].level - sl_level - 1;
        let indent = ''; if(diff_indent > 0) for(let i = 0; i < diff_indent; i++) indent += '\t';
        content += indent + structured_lines[cursor_gap].content + '\n';
        cursor_gap++;
      }

      if(content == '') success = false;
      else {
        tokens_l.push(create(from, content));
        tokens_l.push({ type: 'WAIT' });
      }
    }
  }
  else success = false

  return {
    sucess: success,
    tokens_l: tokens_l,
    line: cursor,
    cursor: (cursor_gap == cursor)? cursor + 1: cursor_gap
  };
};

module.exports = { command, parse };
