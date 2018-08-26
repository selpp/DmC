<template>
  <div class="code">
    <p>const logger = require('./logger');</p>
    <p></p>
    <p>// SYMBOLS</p>
    <p>const HEADER = '#';</p>
    <p>const S_COMMENT = '//';</p>
    <p>const M_COMMENT_B = '/*';</p>
    <p>const M_COMMENT_E = '*/';</p>
    <p></p>
    <p>// ACTIONS</p>
    <p>const A_WAIT = 'wait';</p>
    <p>const A_MOVE_TO_LINE = 'move to line';</p>
    <p>const A_SHOW_LINE = 'show line';</p>
    <p>const A_SHOW_LINE_S = 'to';</p>
    <p>const A_SHOW_INFO = 'show info';</p>
    <p>const A_SHOW_IMAGE = 'show image';</p>
    <p>const A_SHOW_VIDEO = 'show video';</p>
    <p></p>
    <p>// CLEANERS</p>
    <p>let clean_lines = (input) => {</p>
    <p>&nbsp;let clean_tabs = (line) => {</p>
    <p>&nbsp;&nbsp;return (line.startsWith('  ')) ?</p>
    <p>&nbsp;&nbsp;&nbsp;'\t' + clean_tabs(line.substr(2)):</p>
    <p>&nbsp;&nbsp;&nbsp;(line.startsWith(' '))?</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;clean_tabs(line.substr(1)):</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;line;</p>
    <p>&nbsp;};</p>
    <p></p>
    <p>&nbsp;let lines = input.split('\n')</p>
    <p>&nbsp;&nbsp;.filter((line) => line != '')</p>
    <p>&nbsp;&nbsp;.map(clean_tabs);</p>
    <p>&nbsp;return lines;</p>
    <p>};</p>
    <p></p>
    <p>// INTERMEDIATE LINE STRUCTURE</p>
    <p>let structure_lines = (lines) => {</p>
    <p>&nbsp;return lines.map((line) => {</p>
    <p>&nbsp;&nbsp;let content = line;</p>
    <p>&nbsp;&nbsp;let level = 0;</p>
    <p>&nbsp;&nbsp;while(content.startsWith('\t')) {</p>
    <p>&nbsp;&nbsp;&nbsp;content = content.substr(1);</p>
    <p>&nbsp;&nbsp;&nbsp;level++;</p>
    <p>&nbsp;&nbsp;}</p>
    <p>&nbsp;&nbsp;return { content: content, level: level };</p>
    <p>&nbsp;})</p>
    <p>};</p>
    <p></p>
    <p>// TOKENIZER</p>
    <p>let tokenizer = (lines_struct) => {</p>
    <p>&nbsp;let tokens = [];</p>
    <p>&nbsp;let current = 0;</p>
    <p></p>
    <p>&nbsp;// START TOKENIZE</p>
    <p>&nbsp;while(current < lines_struct.length) {</p>
    <p>&nbsp;&nbsp;let current_line_struct = lines_struct[current];</p>
    <p>&nbsp;&nbsp;let current_con = current_line_struct.content;</p>
    <p>&nbsp;&nbsp;let current_lvl = current_line_struct.level;</p>
    <p></p>
    <p>&nbsp;&nbsp;// START HEADER</p>
    <p>&nbsp;&nbsp;if(current_con.startsWith(HEADER)) {</p>
    <p>&nbsp;&nbsp;&nbsp;let content = current_con.substring(HEADER.length);</p>
    <p>&nbsp;&nbsp;&nbsp;let n_hash = 1;</p>
    <p></p>
    <p>&nbsp;&nbsp;&nbsp;while(content.startsWith(HEADER) && n_hash < 6) {</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;content = content.substr(HEADER.length);</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;n_hash++;</p>
    <p>&nbsp;&nbsp;&nbsp;}</p>
    <p></p>
    <p>&nbsp;&nbsp;&nbsp;tokens.push({</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;type: 'HEADER ' + n_hash,</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;content: content.trim()</p>
    <p>&nbsp;&nbsp;&nbsp;});</p>
    <p>&nbsp;&nbsp;&nbsp;current++;</p>
    <p>&nbsp;&nbsp;&nbsp;continue;</p>
    <p>&nbsp;&nbsp;}</p>
    <p>&nbsp;&nbsp;// END HEADER</p>
    <p></p>
    <p>&nbsp;&nbsp;// START ACTION SHOW INFO</p>
    <p>&nbsp;&nbsp;if(current_con.startsWith(A_SHOW_INFO)) {</p>
    <p>&nbsp;&nbsp;&nbsp;let content = current_con.substr(A_SHOW_INFO.length);</p>
    <p></p>
    <p>&nbsp;&nbsp;&nbsp;// START MULTILINE</p>
    <p>&nbsp;&nbsp;&nbsp;if(content == '') {</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;content = '';</p>
    <p></p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;while(current + 1 < lines_struct.length &&</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;  lines_struct[current + 1].level > current_lvl) {</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;  content += lines_struct[++current].content + '\n';</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;}</p>
    <p></p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;if(content.endsWith('\n')) {</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;  content = content.substr(0, content.length - 1);</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;}</p>
    <p>&nbsp;&nbsp;&nbsp;}</p>
    <p>&nbsp;&nbsp;&nbsp;// END MULTILINE</p>
    <p></p>
    <p>&nbsp;&nbsp;&nbsp;if(content != '') tokens.push({</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;type: 'SHOW INFO',</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;content: content</p>
    <p>&nbsp;&nbsp;&nbsp;});</p>
    <p>&nbsp;&nbsp;&nbsp;current++;</p>
    <p>&nbsp;&nbsp;&nbsp;continue;</p>
    <p>&nbsp;&nbsp;}</p>
    <p>&nbsp;&nbsp;// END ACTION SHOW INFO</p>
    <p></p>
    <p>&nbsp;&nbsp;// START ACTION SHOW IMAGE</p>
    <p>&nbsp;&nbsp;if(current_con.startsWith(A_SHOW_IMAGE)) {</p>
    <p>&nbsp;&nbsp;&nbsp;let content = current_con.substring(A_SHOW_IMAGE.length);</p>
    <p></p>
    <p>&nbsp;&nbsp;&nbsp;tokens.push({</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;type: 'SHOW IMAGE',</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;content: content.trim()</p>
    <p>&nbsp;&nbsp;&nbsp;});</p>
    <p>&nbsp;&nbsp;&nbsp;current++;</p>
    <p>&nbsp;&nbsp;&nbsp;continue;</p>
    <p>&nbsp;&nbsp;}</p>
    <p>&nbsp;&nbsp;// END ACTION SHOW IMAGE</p>
    <p></p>
    <p>&nbsp;&nbsp;// START ACTION SHOW VIDEO</p>
    <p>&nbsp;&nbsp;if(current_con.startsWith(A_SHOW_VIDEO)) {</p>
    <p>&nbsp;&nbsp;&nbsp;let content = current_con.substring(A_SHOW_VIDEO.length);</p>
    <p></p>
    <p>&nbsp;&nbsp;&nbsp;tokens.push({</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;type: 'SHOW VIDEO',</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;content: content.trim()</p>
    <p>&nbsp;&nbsp;&nbsp;});</p>
    <p>&nbsp;&nbsp;&nbsp;current++;</p>
    <p>&nbsp;&nbsp;&nbsp;continue;</p>
    <p>&nbsp;&nbsp;}</p>
    <p>&nbsp;&nbsp;// END ACTION SHOW VIDEO</p>
    <p></p>
    <p>&nbsp;&nbsp;// START ACTION WAIT</p>
    <p>&nbsp;&nbsp;if(current_con.startsWith(A_WAIT)) {</p>
    <p>&nbsp;&nbsp;&nbsp;let content = current_con.substring(A_WAIT.length);</p>
    <p></p>
    <p>&nbsp;&nbsp;&nbsp;tokens.push({</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;type: 'WAIT',</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;content: content</p>
    <p>&nbsp;&nbsp;&nbsp;});</p>
    <p>&nbsp;&nbsp;&nbsp;current++;</p>
    <p>&nbsp;&nbsp;&nbsp;continue;</p>
    <p>&nbsp;&nbsp;}</p>
    <p>&nbsp;&nbsp;// END ACTION WAIT</p>
    <p></p>
    <p>&nbsp;&nbsp;// START ACTION MOVE TO LINE</p>
    <p>&nbsp;&nbsp;if(current_con.startsWith(A_MOVE_TO_LINE)) {</p>
    <p>&nbsp;&nbsp;&nbsp;let content = current_con.substring(A_MOVE_TO_LINE.length).trim();</p>
    <p>&nbsp;&nbsp;&nbsp;let to = null;</p>
    <p></p>
    <p>&nbsp;&nbsp;&nbsp;if(content != '') {</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;let possible_int = content.split(' ');</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;to = parseInt(possible_int[0]);</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;if(to != null) content = content.substr(('' + to).length);</p>
    <p>&nbsp;&nbsp;&nbsp;}</p>
    <p></p>
    <p>&nbsp;&nbsp;&nbsp;tokens.push({</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;type: 'MOVE TO LINE',</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;content: [to, content]</p>
    <p>&nbsp;&nbsp;&nbsp;});</p>
    <p>&nbsp;&nbsp;&nbsp;current++;</p>
    <p>&nbsp;&nbsp;&nbsp;continue;</p>
    <p>&nbsp;&nbsp;}</p>
    <p>&nbsp;&nbsp;// END ACTION MOVE TO LINE</p>
    <p></p>
    <p>&nbsp;&nbsp;// START ACTION SHOW LINE</p>
    <p>&nbsp;&nbsp;if(current_con.startsWith(A_SHOW_LINE)) {</p>
    <p>&nbsp;&nbsp;&nbsp;let content = current_con.substring(A_SHOW_LINE.length).trim();</p>
    <p>&nbsp;&nbsp;&nbsp;let from = null;</p>
    <p>&nbsp;&nbsp;&nbsp;let to = null;</p>
    <p></p>
    <p>&nbsp;&nbsp;&nbsp;if(content != '' && content.includes(A_SHOW_LINE_S)) {</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;let possible_ints = content.split(' ');</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;if(possible_ints.length >= 3 &&</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;   possible_ints[1] == A_SHOW_LINE_S) {</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;from = parseInt(possible_ints[0]);</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to = parseInt(possible_ints[2]);</p>
    <p></p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;  if(to != null && from != null)</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content = content.substr((from + ' to ' + to).length);</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;}</p>
    <p>&nbsp;&nbsp;&nbsp;}</p>
    <p></p>
    <p>&nbsp;&nbsp;&nbsp;tokens.push({</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;type: 'SHOW LINES',</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;content: [from, to, content]</p>
    <p>&nbsp;&nbsp;&nbsp;});</p>
    <p>&nbsp;&nbsp;&nbsp;current++;</p>
    <p>&nbsp;&nbsp;&nbsp;continue;</p>
    <p>&nbsp;&nbsp;}</p>
    <p>&nbsp;&nbsp;// END ACTION SHOW LINE</p>
    <p></p>
    <p>&nbsp;&nbsp;// START INLINE COMMENT</p>
    <p>&nbsp;&nbsp;if(current_con.startsWith(S_COMMENT)) {</p>
    <p>&nbsp;&nbsp;&nbsp;let content = current_con.substring(S_COMMENT.length).trim();</p>
    <p></p>
    <p>&nbsp;&nbsp;&nbsp;tokens.push({</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;type: 'COMMENT',</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;content: content</p>
    <p>&nbsp;&nbsp;&nbsp;});</p>
    <p>&nbsp;&nbsp;&nbsp;current++;</p>
    <p>&nbsp;&nbsp;&nbsp;continue;</p>
    <p>&nbsp;&nbsp;}</p>
    <p>&nbsp;&nbsp;// END INLINE COMMENT</p>
    <p></p>
    <p>&nbsp;&nbsp;// START MULTILINE COMMENT</p>
    <p>&nbsp;&nbsp;if(current_con.startsWith(M_COMMENT_B)) {</p>
    <p>&nbsp;&nbsp;&nbsp;let content = current_con.substring(M_COMMENT_B.length).trim();</p>
    <p></p>
    <p>&nbsp;&nbsp;&nbsp;if(current + 1 < lines_struct.length) {</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;content = '';</p>
    <p></p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;while(current + 1 < lines_struct.length &&</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;!lines_struct[current + 1].content.startsWith(M_COMMENT_E)) {</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;  content += lines_struct[++current].content + '\n';</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;}</p>
    <p>&nbsp;&nbsp;&nbsp;}</p>
    <p></p>
    <p>&nbsp;&nbsp;&nbsp;if(content.endsWith('\n')) {</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;content = content.substr(0, content.length - 1);</p>
    <p>&nbsp;&nbsp;&nbsp;}</p>
    <p></p>
    <p>&nbsp;&nbsp;&nbsp;tokens.push({</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;type: 'COMMENT',</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;content: content</p>
    <p>&nbsp;&nbsp;&nbsp;});</p>
    <p>&nbsp;&nbsp;&nbsp;current++;</p>
    <p>&nbsp;&nbsp;&nbsp;continue;</p>
    <p>&nbsp;&nbsp;}</p>
    <p>&nbsp;&nbsp;if(current_con.startsWith(M_COMMENT_E)) {</p>
    <p>&nbsp;&nbsp;&nbsp;current++;</p>
    <p>&nbsp;&nbsp;&nbsp;continue;</p>
    <p>&nbsp;&nbsp;}</p>
    <p>&nbsp;&nbsp;// END MULTILINE COMMENT</p>
    <p></p>
    <p>&nbsp;&nbsp;logger.warning('DMC TOKENIZER',</p>
    <p>&nbsp;&nbsp;&nbsp;'Unexpected Token: ' + JSON.stringify(current_line_struct));</p>
    <p>&nbsp;&nbsp;current++;</p>
    <p>&nbsp;}</p>
    <p>&nbsp;// END TOKENIZE</p>
    <p></p>
    <p>&nbsp;return tokens;</p>
    <p>};</p>
  </div>
</template>

<script>
export default {
  name: 'Code'
}
</script>

<style scoped>
.code {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;

  margin: auto;
  width: 50%;
  padding: 25px;
}
</style>
