<template>
  <div class="presentation">
    <transition name=bounce>
      <Modal
        v-for="(modal, index) in modals" :key="index"
        v-if="modal.show"
        v-bind:type="modal.type"
        v-bind:content="modal.content"
      />
    </transition>

    <div class="test">
      <button @click="test_next">O MODAL</button>
      <button @click="test_reset">X MODAL</button>
      <button @click="test_scroll">MOVE & EMPHASIS</button>
    </div>

    <Code
      v-bind:highlights="highlights"
      v-bind:code="code"
      v-bind:lines="lines"
    />
  </div>
</template>

<script>
import Modal from '@/components/Modal'
import Code from '@/components/Code';
import { bus } from '@/bus/bus';

export default {
  name: 'Presentation',
  components: {
    Modal,
    Code
  },
  data: function() {
    return {
      highlights: null
    }
  },
  created: function() {
    this.test_code();
  },
  computed: {
    modals() { return this.$store.state.modals; },
    code() { return this.$store.state.code; },
    lines() { return this.$store.state.lines }
  },
  methods: {
    reset_highlights: function() { this.highlights = null; },
    set_highlights: function(a, b) { this.highlights = { a: a, b: b }; },
    reset_modals: function() { this.$store.commit('reset_modals'); },
    set_modal: function(key, content) { this.$store.commit('set_modal', { key: key, content: content }); },
    set_code: function(code) { this.$store.commit('set_code', { code: code }); },
    move_to: function(index) { bus.$emit('move-to-line', index); },

    // TEST FUNCTIONS TODO: REMOVE
    test_code: function() {
      this.set_code(
        '\n' +
        '// TEST TEST TEST\n' +
        'let a1 = function(params) {\n' +
        '\treturn params;\n' +
        '}\n\n' +
        '// TEST TEST TEST\n' +
        'let a2 = function(params) {\n' +
        '\treturn params;\n' +
        '}\n\n' +
        '// TEST TEST TEST\n' +
        'let a3 = function(params) {\n' +
        '\treturn params;\n' +
        '}\n\n' +
        '// TEST TEST TEST\n' +
        'let a4 = function(params) {\n' +
        '\treturn params;\n' +
        '}\n\n' +
        '// TEST TEST TEST\n' +
        'let a5 = function(params) {\n' +
        '\treturn params;\n' +
        '}\n\n' +
        '// TEST TEST TEST\n' +
        'let a6 = function(params) {\n' +
        '\treturn params;\n' +
        '}\n\n' +
        '// TEST TEST TEST\n' +
        'let a7 = function(params) {\n' +
        '\treturn params;\n' +
        '}\n\n' +
        '// TEST TEST TEST\n' +
        'let a8 = function(params) {\n' +
        '\treturn params;\n' +
        '}\n\n' +
        '// TEST TEST TEST\n' +
        'let a9 = function(params) {\n' +
        '\treturn params;\n' +
        '}\n\n'
      );
    },
    test_next: function() {
      let modals = this.modals;
      let n = Object.keys(modals).length;
      let r = Math.floor(Math.random() * n);
      let key = Object.keys(modals)[r];
      let content = modals[key].content;
      if(key === 'info') content = (typeof(content) === typeof([]))?
        content.join('\n'):
        content;
      this.set_modal(key, content);
    },
    test_reset: function() {
      this.reset_modals();
    },
    test_scroll: function() {
      let ns = [1, 6, 11, 16, 21, 26, 31, 36];
      let n = Math.floor(Math.random() * ns.length);
      let line = ns[n];
      let to_line = line + 4;

      this.set_highlights(line, to_line);
      return this.move_to(line);
    }
  }
}
</script>

<style scoped>
.test {
  z-index: 10;
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
