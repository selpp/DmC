<template>
  <!-- &nbsp; -->
  <div class="code">
    <section>
      <pre v-highlightjs>
        <code id="code" v-bind:class="language">
          {{ code }}
        </code>
      </pre>

      <pre id="t_code">
        <p v-for="(line, index) in t_code" :key="index"
          v-bind:id="'line' + index"
          v-bind:ref="index"
          v-bind:style="(highlights[index] == true)? highlight : hidden"
        >
          {{ line }}
        </p>
      </pre>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Code',
  props: [ 'code', 'language' ],
  data: function() {
    return {
      t_code: this.code.split('\n'),
      highlights: {},
      highlight: { opacity: 0 },
      hidden: { opacity: 0.7 }
    }
  },
  mounted: function(){
    for(let i = 0; i < this.t_code; i++)
      this.highlights[i] = false;

    this.highlights[3] = true;
    this.highlights[4] = true;
    this.highlights[5] = true;
    this.highlights[6] = true;
    this.highlights[7] = true;
    this.highlights[8] = true;
  }
}
</script>

<style scoped>
.code {
  z-index: 0;
  position: relative;
  margin: auto;
  margin-top: 100px;
  width: 70%;
}

code {
  position: absolute;
  background-color:  #282b32;
  font-size: 20px;
}

#t_code {
  position: absolute;
  padding: 0;
  margin: 0;
  font-size: 20px;
  line-height: 8px;
  width: 100%;
}
#t_code p {
  background-color: #282b32;
  color: #282b32;
  padding: 0;
  margin: 0;
}
</style>
