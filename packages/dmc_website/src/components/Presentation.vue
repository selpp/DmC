<template>
  <div class="presentation">
    <transition name=bounce>
      <Modal v-if="modal != null" v-bind:modal="modal" />
    </transition>

    <Code v-bind:highlights="highlights" v-bind:code="code"/>
  </div>
</template>

<script>
import Modal from '@/components/Modal'
import Code from '@/components/Code';
import { bus } from '@/bus/bus';

export default {
  name: 'Presentation',
  components: { Modal, Code },
  props: [ 'sequences', 'code' ],
  data: function() {
    return {
      highlights: null, modal: null,
      s_id: -2, a_id: 0, processing: true
    };
  },
  mounted: function() {
    this.sequences[-1] = [
      { type: 'HEADER', params: { lvl: 1, content: 'DMC ADVICES' } },
      { type: 'SHOW INFO', params: { content: 'To allow the best experience possible please use Google Chrome or Safari as your web browser.' } },
      { type: 'SHOW INFO', params: { content: 'For Google Chrome you may need to enbale \'Experimental Web Platform features\'.' } },
      { type: 'SHOW INFO', params: { content: 'To do so, go to the \'chrome://flags\' url.' } },
      { type: 'SHOW INFO', params: { content: 'Thanks for choosing DmC as your code presentation tool!' } },
      { type: 'SHOW INFO', params: { content: 'Press \'F11\' to toggle fullscreen mode and \'D\' to continue...' } },
    ]
    this.do_next();

    window.addEventListener('keypress', e => {
      let key = String.fromCharCode(e.keyCode).toUpperCase();
      if(this.processing == false){
        switch (key) {
          case 'D': this.processing = true; this.do_next(); break;
          case 'Q': this.processing = true; this.do_previous(); break;
          default: break;
        }
      }
    });
  },
  methods: {
    move_to: function(index) { bus.$emit('move-to-line', index); },
    set_highlights: function(a, b) { this.highlights = { a: a, b: b }; },
    reset_highlights: function() { this.highlights = null; },
    set_modal: function(modal) { setTimeout(() => { this.modal = modal; }, 500) },
    reset_modal: function() { this.modal = null; },
    reset_all: function() { this.reset_modal(); this.reset_highlights(); },

    do_action(s_id, a_id) {
      if(a_id >= this.sequences[s_id].length) this.processing = false;
      else {
        let action = this.sequences[s_id][a_id];
        switch (action.type) {
          case 'HEADER': this.reset_modal(); this.set_modal({ type: 'HEADER ' + action.params.lvl, content: action.params.content }); break;
          case 'SHOW INFO': this.reset_modal(); this.set_modal({ type: 'INFO', content: action.params.content }); break;
          case 'SHOW IMAGE': this.reset_modal(); this.set_modal({ type: 'IMAGE', content: action.params.url }); break;
          case 'SHOW YOUTUBE': this.reset_modal(); this.set_modal({ type: 'YOUTUBE', content: action.params.url }); break;
          case 'SHOW LINES': this.reset_all(); this.set_highlights(action.params.from, action.params.to); break;
          case 'MOVE TO': this.reset_modal(); this.move_to(action.params.to); break;
        }
        let time = (s_id == -1 && a_id != this.sequences[s_id].length - 1)? 4000: 0;
        setTimeout(() => { this.do_action(s_id, a_id + 1); }, time);
      }
    },
    do_sequence(s_id) {
      if(this.sequences[s_id].length > 0) this.do_action(s_id, 0);
      else this.processing = false;
    },
    do_next() {
      if((this.s_id + 1) in this.sequences) {
        // this.reset_all();
        this.s_id++; this.do_sequence(this.s_id);
      } else this.processing = false;
    },
    do_previous() {
      if(this.s_id > -1) {
        // this.reset_all();
        this.s_id--; this.do_sequence(this.s_id);
      } else this.processing = false;
    }
  }
}
</script>

<style scoped>
.test {
  z-index: 40;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: auto;
  background-color: #282b32;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
