<template>
  <div class="code">
    <pre v-highlightjs>
      <code>{{ code }}</code>
    </pre>

    <pre id="cover">
      <div v-for="(line, index) in lines" :key="index" v-bind:id="'l' + index"
        ref="l" v-bind:style="opacity(index)">
        {{ line }}
      </div>
    </pre>
  </div>
</template>

<script>
import { bus } from '@/bus/bus';

export default {
  name: 'Code',
  props: [ 'highlights', 'code'],
  computed: {
    lines: function() { return this.code.split('\n'); },
  },
  data: function() {
    return {
      highlight: { opacity: 0 },
      hidden: { opacity: 0.9 },
      last_move: null
    }
  },
  methods: {
    opacity: function(index) {
      if(this.highlights == null) return this.hidden;
      if(index >= this.highlights.a && index <= this.highlights.b) return this.highlight;
      return this.hidden;
    },
    move_to: function(index) {
      if(index != this.last_move) {
        let el = this.$refs['l'][index]; this.last_move = index;
        this.$nextTick(() => { el.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"}); });
      }
    }
  },
  created: function() { bus.$on('move-to-line', index => { this.move_to(index); }); }
}
</script>

<style scoped>
.code { z-index: 0; margin: auto; width: 60%; height: auto; }
pre { position: absolute; margin: 0px; padding: 0px; max-width: 70%; height: auto; top: 150px; overflow-x: hidden; }
code { background-color: #282b32; padding: 0px; font-size: 25px; line-height: 25px; overflow-x: hidden;}
#cover div { padding: 0px; font-size: 25px; height: 25px; color: rgba(0, 0, 0, 0); background-color: #282b32; overflow-x: hidden; }
</style>
