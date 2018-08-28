<template>
  <div class="presentation">
    <transition name=bounce>
      <Modal v-if="modal != null" v-bind:modal="modal" />
    </transition>

    <div class="test">
      <button @click="test_open_modal">O MODAL</button>
      <button @click="test_reset_modals">X MODAL</button>
      <button @click="test_scroll_emphasis">MOVE & EMPHASIS</button>
    </div>

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
      highlights: null,
      modal: null
    };
  },
  methods: {
    move_to: function(index) { bus.$emit('move-to-line', index); },
    set_highlights: function(a, b) { this.highlights = { a: a, b: b }; },
    reset_highlights: function() { this.highlights = null; },
    set_modal: function(modal) { this.modal = modal; },
    reset_modals: function() { this.modal = null; },

    // TEST FUNCTIONS TODO: REMOVE
    test_open_modal: function() {
      let modals = [
        { type: 'HEADER 1', content: 'Header 1', show: false },
        { type: 'HEADER 2', content: 'Header 2', show: false },
        { type: 'HEADER 3', content: 'Header 3', show: false },
        { type: 'HEADER 4', content: 'Header 4', show: false },
        { type: 'HEADER 5', content: 'Header 5', show: false },
        { type: 'HEADER 6', content: 'Header 6', show: false },
        { type: 'INFO', content: 'labore irure quae minim export quid quae quid esse irure illum veniam tempor aliqua legam dolor fore eram labore fore duis export eram elit minim esse noster\n\tvelit culpa amet magna nulla summis malis minim dolore velit export export\n\tmultos fore malis malis multos veniam labore anim quorum quae dolore', show: false },
        { type: 'IMAGE', content: 'https://pre00.deviantart.net/5943/th/pre/i/2017/196/c/2/metamorphie_faciesse_by_taitsujin-dbgeh6a.jpg', show: false },
        { type: 'YOUTUBE', content: 'hVEPXzve5EY', show: false }
      ];
      let n = Math.floor(Math.random() * modals.length);
      this.set_modal(modals[n]);
    },
    test_reset_modals: function() {
      this.reset_modals();
    },
    test_scroll_emphasis: function() {
      let ns = [1, 6, 11, 16, 21, 26, 31, 36];
      let n = Math.floor(Math.random() * ns.length);
      let line = ns[n]; let to_line = line + 4;
      this.set_highlights(line, to_line);
      return this.move_to(line);
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
