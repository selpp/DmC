<template>
  <div id="presentation">
    <div id="code">
      <pre v-highlightjs><code>{{ code }}</code></pre>
      <div id="cover">
        <div v-for="(line, index) in lines" :key="index"
          v-bind:id="'l' + index"
          ref="l"
          v-bind:style="opacity(index)">
          {{ line }}
        </div>
      </div>
    </div>

    <transition name=bounce>
      <Modal v-if="modal != null" :modal="modal" />
    </transition>

    <div id="state">
      <div v-if="auto">auto</div>
      <span>{{ actual }}</span><span>/{{ total }}</span>
    </div>

    <div id="cursor">&#10148;</div>
  </div>
</template>

<script>
import Modal from '@/components/Modal';
import sound from '@/sound/sound';

export default {
  name: 'Presentation',
  components: { Modal },
  props: [ 'code', 'sequences' ],
  data: function () {
    return {
      modal: null,
      highlights: null,
      auto: false,
      s_id: -1,
      processing: false,
      highlight: { opacity: 0 },
      hidden: { opacity: 0.8 },
      elements: []
    }
  },
  computed: {
    total: function() { return Object.keys(this.sequences).length; },
    actual: function() { return this.s_id + 1; },
    lines: function() { return this.code.split('\n'); }
  },
  mounted: function() {
    window.addEventListener('keydown', (e) => { this.handle_key(e); });
    if(this.auto == true) { this.processing = true; this.do_next(); }
    this.elements = this.$refs['l'];
    this.move_to(0);
  },
  methods: {
    move_to: function(index) {
      index--;
      let i = (index < 0)? 0: (index >= this.lines.length)? this.lines.length - 1: index;
      let el = this.elements[i];
      this.scroll(el.offsetTop, 500);
    },
    set_highlights: function(from, to) {
      if(to == null && from == -1) this.reset_highlights();
      else if(to == null) this.highlights = { a: from, b: from };
      else this.highlights = { a: from, b: to };
    },
    reset_highlights: function() { this.highlights = null; },
    set_modal: function(modal) { setTimeout(() => { sound.play('MODAL_POP'); this.modal = modal; }, 500) },
    reset_modal: function() { this.modal = null; },
    reset_all: function() { this.reset_modal(); this.reset_highlights(); },
    reverse_auto: function() {
      if(this.auto == true) this.auto = false;
      else { this.auto = true; this.processing = true; this.next(); }
    },

    handle_key: function(e) {
      if(this.processing == false) switch (e.keyCode) {
          case 39: this.processing = true; this.do_next(); break;
          case 37: this.processing = true; this.do_previous(); break;
          default: break;
      }
      if(e.keyCode == 65) this.reverse_auto();
    },

    opacity: function(index) {
      if(this.highlights != null && index + 1 >= this.highlights.a && index + 1 <= this.highlights.b) return this.highlight;
      return this.hidden;
    },

    do_action: function(s_id, a_id) {
      if(a_id >= this.sequences[s_id].length) {
        if(this.auto == true && (this.s_id + 1) in this.sequences) this.do_next();
        else this.processing = false;
      }
      else {
        let action = this.sequences[s_id][a_id];
        switch (action.type) {
          case 'HEADER': this.reset_modal(); this.set_modal({ type: 'H' + action.params.lvl, content: action.params.content }); break;
          case 'SHOW INFO': this.reset_modal(); this.set_modal({ type: 'INFO', content: action.params.content }); break;
          case 'SHOW MATHS': this.reset_modal(); this.set_modal({ type: 'MATHS', content: action.params.content }); break;
          case 'SHOW IMAGE': this.reset_modal(); this.set_modal({ type: 'IMAGE', content: action.params.url }); break;
          case 'SHOW YOUTUBE': this.reset_modal(); this.set_modal({ type: 'YOUTUBE', content: action.params.url }); break;
          case 'SHOW QRCODE': this.reset_modal(); this.set_modal({ type: 'QRCODE', content: { url: action.params.url, qrcode: action.params.base64 } }); break;
          case 'SHOW LINE': this.reset_all(); this.set_highlights(action.params.from, action.params.to); break;
          case 'MOVE TO': this.reset_modal(); this.move_to(action.params.to); break;
          default: break;
        }
        let time = (this.auto == true)? 5000: 0;
        setTimeout(() => { this.do_action(s_id, a_id + 1); }, time);
      }
    },
    do_sequence: function(s_id) { if(this.sequences[s_id].length > 0) { sound.play('NEXT_SEQUENCE'); this.do_action(s_id, 0); } else this.processing = false; },
    do_next: function() { if((this.s_id + 1) in this.sequences) { this.s_id++; this.do_sequence(this.s_id); } else this.processing = false; },
    do_previous: function() { if(this.s_id > 0) { this.s_id--; this.do_sequence(this.s_id); } else { this.s_id = -1; this.processing = false; this.reset_all(); } },

    scroll: function(y, duration) {
      let start = window.scrollY;
      let change = y - start;
      let t = 0;
      let increment = 20;

      let easIOutQuad = function(t, start, change, duration) {
        t /= duration / 2;
        let val = (t < 1)? change / 2 * t * t + start:
          -change / 2 * ((--t) * (t - 2) - 1) + start;
        return val;
      };

      let animate_scroll = function () {
        t += increment;
        let val = easIOutQuad(t, start, change, duration);
        window.scroll(0, val, 'smooth');
        if(t < duration) {
          setTimeout(animate_scroll, increment);
        }
      };
      animate_scroll();
    }
  }
}
</script>

<style scoped>
#presentation {
  position: relative;
  margin: auto;
  width: 100%;
  margin-top: 80px;
}
#line-anchor {
  position: fixed;
  top: 80px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ff00ff;
}
#state {
  position: fixed;
  bottom: 0px;
  right: 0px;
  padding: 25px;
  font-weight: bold;
  font-size: 25px;
  text-align: right;
}
#cover {
  position: absolute;
  padding: 0px;
  margin: 0px auto;
  left: 0px;
  right: 0px;
  pointer-events: none;
  overflow-x: hidden;
  width: 100%;
}
#cover div{
  height: 20px;
  color: rgba(0, 0, 0, 0);
  background-color: #17181c;
  width: 100%;
  overflow-x: hidden;
}
#cursor {
  position: fixed;
  top: 80px;
  left: 0px;
  font-size: 20px;
  line-height: 25px;
  margin-left: 10%;
}

pre {
  position: absolute;
  padding: 0px;
  margin: 0px auto;
  left: 0px;
  right: 0px;
  overflow-x: hidden;
  max-width: 70%;
}
code {
  padding: 0px;
  margin: 0px;
  font-size: 20px;
  line-height: 20px;
  background-color: #17181c;
  width: 100%;
  overflow-x: hidden;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% { transform: scale(0); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}
</style>
