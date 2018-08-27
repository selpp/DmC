<template>
  <div class="code">
    <section>
      <pre v-highlightjs>
        <code id="code">
          {{ code }}
        </code>
      </pre>

      <pre id="lines">
        <p
          v-for="(line, index) in lines" :key="index"
          v-bind:id="'line' + index"
          v-bind:style="opacity(index)"
        >
          {{ line }}
        </p>
      </pre>
    </section>
  </div>
</template>

<script>
import { bus } from '@/bus/bus';

export default {
  name: 'Code',
  props: [ 'highlights', 'code', 'lines' ],
  data: function() {
    return {
      highlight: { opacity: 0 },
      hidden: { opacity: 0.9 },
      last_move: null,
      cancellScroll: null,
      options: {
        container: null, easing: 'ease', offset: -200, cancelable: true,
        onStart: function(element) {}, onDone: function(element) {}, onCancel: function() {},
        x: false, y: true
      }
    }
  },
  methods: {
    opacity: function(index) {
      if(this.highlights == null) return this.hidden;
      if(index >= this.highlights.a && index <= this.highlights.b)
        return this.highlight;
      return this.hidden;
    },
    move_to: function(index) {
      if(index === this.last_move) return;
      this.last_move = index;

      if(this.cancellScroll != null) this.cancellScroll();
      this.cancellScroll = this.$scrollTo('#line' + index, 500, this.options);
    }
  },
  created: function() {
    bus.$on('move-to-line', index => {
      this.move_to(index);
    });
  }
}
</script>

<style scoped>
.code {
  z-index: 0;
  margin: auto;
  margin-top: 100px;
  width: 60%;
}

code {
  position: absolute;
  background-color:  #282b32;
  font-size: 20px;
}

#lines {
  position: absolute;
  padding: 0;
  margin: 0;
  font-size: 20px;
  line-height: 8px;
}
#lines p {
  background-color: #282b32;
  color: #282b32;
  padding: 0;
  margin: 0;
}
</style>
