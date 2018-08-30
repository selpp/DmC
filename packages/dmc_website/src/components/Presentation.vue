<template>
  <div class="presentation">
    <transition name=bounce>
      <Modal v-if="modal != null" v-bind:modal="modal" />
    </transition>

    <Code v-bind:highlights="highlights" v-bind:code="this.code"/>

    <div id="state"><span>{{ actual }}</span><span>/</span><span>{{ total }}</span></div>
  </div>
</template>

<script>
import Modal from '@/components/Modal'
import Code from '@/components/Code';
import { bus } from '@/bus/bus';

export default {
  name: 'Presentation',
  components: { Modal, Code },
  props: [ 'source', 'script', 'in_store', 'auto' ],
  data: function() {
    return {
      highlights: null, modal: null,
      s_id: -1, a_id: 0, processing: false
    };
  },
  computed: {
    code: function() { return (this.in_store == true)? '\n' + this.$store.state.source: '\n' + this.source; },
    sequences: function() { return (this.in_store == true)? this.$store.state.script: this.script; },
    total: function() { return Object.keys(this.sequences).length; },
    actual: function() { return this.s_id + 1; },
  },
  mounted: function() {
    if(this.auto == false) window.addEventListener('keydown', (e) => { this.handle_key(e); });
    else { this.processing = true; this.do_next(); }
  },
  methods: {
    move_to: function(index) { bus.$emit('move-to-line', index); },
    set_highlights: function(from, to) {
      if(to == null && from == -1) this.reset_highlights();
      else if(to == null) this.highlights = { a: from, b: from };
      else this.highlights = { a: from, b: to };
    },
    reset_highlights: function() { this.highlights = null; },
    set_modal: function(modal) { setTimeout(() => { this.modal = modal; }, 500) },
    reset_modal: function() { this.modal = null; },
    reset_all: function() { this.reset_modal(); this.reset_highlights(); },
    reverse_auto: function() { this.auto = !this.auto; },

    handle_key: function(e) {
      if(this.processing == false) switch (e.keyCode) {
          case 39: this.processing = true; this.auto = false; this.do_next(); break;
          case 37: this.processing = true; this.auto = false; this.do_previous(); break;
          case 32: this.reverse_auto(); break;
          default: break;
      }
    },

    play_next: function() { this.$store.state.sound('NEXT_SEQUENCE'); },

    do_action: function(s_id, a_id) {
      if(a_id >= this.sequences[s_id].length) {
        if(this.auto == true && (this.s_id + 1) in this.sequences) this.do_next();
        else this.processing = false;
      }
      else {
        let action = this.sequences[s_id][a_id];
        switch (action.type) {
          case 'HEADER': this.reset_modal(); this.set_modal({ type: 'HEADER ' + action.params.lvl, content: action.params.content }); break;
          case 'SHOW INFO': this.reset_modal(); this.set_modal({ type: 'INFO', content: action.params.content }); break;
          case 'SHOW IMAGE': this.reset_modal(); this.set_modal({ type: 'IMAGE', content: action.params.url }); break;
          case 'SHOW YOUTUBE': this.reset_modal(); this.set_modal({ type: 'YOUTUBE', content: action.params.url }); break;
          case 'SHOW LINE': this.reset_all(); this.set_highlights(action.params.from, action.params.to); break;
          case 'MOVE TO': this.reset_modal(); this.move_to(action.params.to); break;
        }
        let time = (this.auto == true)? 5000: 0;
        setTimeout(() => { this.do_action(s_id, a_id + 1); }, time);
      }
    },
    do_sequence: function(s_id) { if(this.sequences[s_id].length > 0) { this.play_next(); this.do_action(s_id, 0); } else this.processing = false; },
    do_next: function() { if((this.s_id + 1) in this.sequences) { this.s_id++; this.do_sequence(this.s_id); } else this.processing = false; },
    do_previous: function() { if(this.s_id > 0) { this.s_id--; this.do_sequence(this.s_id); } else this.processing = false; }
  }
}
</script>

<style scoped>
#state {
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 25px;
  font-weight: bold;
  font-size: 25px;
}

.bounce-enter-active { animation: bounce-in .5s; }
.bounce-leave-active { animation: bounce-in .5s reverse; }
@keyframes bounce-in {
  0% { transform: scale(0); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}
</style>
