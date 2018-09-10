var request = require('request')
  , cheerio = require('cheerio')

let command = 'show quote from';


let get_face = (name) => {

  // From images-scraper
  // https://github.com/pevers/images-scraper

  var roptions = {
		'url': 'http://www.bing.com/images/search?q=%&view=detailv2'.replace('%', encodeURIComponent(name)),
		'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36'
  };
  
  var face   = null;
  var finish = false;

  request(roptions, function (err, response, body) {
    console.log(roptions.url)
    if (!err && response.statusCode === 200) {
      // extract all items, go to next page if exist
      var $ = cheerio.load(body);
      $('.item a[class="thumb"]').each(function (el) {
        var item = $(this).attr('href');
        face = item;
        console.log("Face of "+name+": "+item)
      });
    } else {
      console.log("err", err)
    }

    finish = true; 
  });



  return face;
}

let create = (from, content) => {
  return {
    type: 'SHOW QUOTE',
    params: {
      face: get_face(from),
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
