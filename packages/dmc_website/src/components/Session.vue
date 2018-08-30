<template>
  <div id="files">
    <form>
      <div class="file-container">
        <input  v-if="source_stage == 0" type="file" name="source" id="source" @change="process_source($event)"
        accept=".dmc, .md, .c, .h, .cpp, .hpp, .java, .js, .cs, .html, .css, .coffee, .python, .lua, .d, .txt,
        .sql, .json, .xml, .xhtml, .scss, .vue, .gitignore"/>
        <label v-if="source_stage == 0" for="source" @click="play_sound('BUTTON_CLICK')" v-on:mouseover="play_sound('BUTTON_HOVER')"><strong>source</strong></label>
        <transition name=fade>
          <div class="loader-boarder" v-if="source_stage == 1"><div class="loader"></div></div>
        </transition>
        <transition name=fade>
          <div v-if="source_stage > 1" id="source-name">{{ source_file.name }}</div>
        </transition>
      </div>

      <div class="file-container">
        <input v-if="script_stage == 0" type="file" name="script" id="script" @change="process_script($event)" accept=".dmc"/>
        <label v-if="script_stage == 0" for="script" @click="play_sound('BUTTON_CLICK')" v-on:mouseover="play_sound('BUTTON_HOVER')"><strong>script</strong></label>
        <transition name=fade>
          <div class="loader-boarder" v-if="script_stage == 1"><div class="loader"></div></div>
        </transition>
        <transition name=fade>
          <div v-if="script_stage > 1" v-bind:id="(script_warnings != null)? 'warning': 'source-name'">
            {{ script_file.name }}
          </div>
        </transition>
      </div>

      <div class="file-container">
        <transition name=fade>
          <div v-if="(source_stage == 3 && script_stage == 3)" id="start-button" @click="start_session">
            <span id="start-symbol" v-on:mouseover="play_sound('BUTTON_HOVER')"> </span>
          </div>
        </transition>
      </div>
    </form>
  </div>
</template>

<script>
const { compiler } = require('dmc_compiler');

export default {
  name: 'Session',
  data: function() {
    return {
      source_file: null, script_file: null,
      source_content: null, script_content: null, script_warnings: null,
      source_stage: 0, script_stage: 0
    };
  },
  methods: {
    play_sound: function(sound) { this.$store.state.sound(sound); },
    process_source: function(e) {
      this.source_file = e.target.files[0]; this.source_stage++;
      setTimeout(() => { this.read_source(); this.source_stage++; this.play_sound('LOADING'); }, 2000);
    },
    process_script: function(e) {
      this.script_file = e.target.files[0]; this.script_stage++;
      setTimeout(() => { this.read_script(); this.script_stage++; this.play_sound('LOADING'); }, 2000);
    },
    read_source: function() {
      const reader = new FileReader(); reader.onload = e => { this.source_content = e.target.result; };
      reader.readAsText(this.source_file); setTimeout(() => { this.source_stage += 1; }, 200);
    },
    read_script: function() {
      const reader = new FileReader(); reader.onload = e => {
        let res = compiler(e.target.result);
        if(res.warnings.length > 0) {
          this.script_warnings = res.warnings;
          console.log('WARNINGS: ', JSON.stringify(res.warnings, null, 2));}
        this.script_content = res.sequences;
      };
      reader.readAsText(this.script_file); setTimeout(() => { this.script_stage += 1; }, 200);
    },
    start_session: function() {
      this.$store.commit('set_source', { value: this.source_content });
      this.$store.commit('set_script', { value: this.script_content });
      this.play_sound('LOADING');
      this.$router.push({ name: 'Play'});
    }
  }
}
</script>

<style scoped>
#files { width: 70%; height: 100vh; margin: auto; padding: 0; }

#source-name { font-weight: bold; height: 250px; width: 250px; line-height: 250px;
  border: solid 10px #19a767; border-radius: 25px; text-align: center;
}
#warning { font-weight: bold; height: 250px; width: 250px; line-height: 250px;
  border: solid 10px #a75919; border-radius: 25px; text-align: center;
}

#start-button {
  font-weight: bold; height: 250px; width: 250px; line-height: 250px;
  border: solid 10px rgba(25, 167, 103, 0.5);
  border-radius: 25px; text-align: center;
  transition: 0.4s; cursor: pointer;
}
#start-symbol {
  position:absolute; margin-left: -70px; margin-top: 45px; transition: 0.4s;
  border-left:150px solid rgba(196, 201, 212, 0.5); border-right:80px dashed transparent;
  border-top:80px dashed transparent; border-bottom:80px dashed transparent;
}

#start-button:hover { border-color: #19a767; }
#start-button:hover > #start-symbol {
  margin-left: -75px; margin-top: 35px;
  border-left:160px solid #c4c9d4; border-right:90px dashed transparent;
  border-top:90px dashed transparent; border-bottom:90px dashed transparent;
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.25s ease-out; }
.fade-enter, .fade-leave-to { opacity: 0; }

.loader-boarder { position: absolute; margin: 0; padding: 0; overflow: hidden;
  width: 250px; height: 250px; border: solid 10px #193da7; border-radius: 25px;
}

.loader,
.loader:before,
.loader:after {
  border-radius: 50%; width: 25px; height: 25px;
  -webkit-animation-fill-mode: both; animation-fill-mode: both;
  -webkit-animation: load7 1.8s infinite ease-in-out;
  animation: load7 1.8s infinite ease-in-out;
}
.loader {
  color: #c4c9d4; font-size: 12px; margin: auto; position: relative; margin-top: 90px;
  -webkit-animation-delay: -0.16s; animation-delay: -0.16s;
}
.loader:before,
.loader:after { content: ''; position: absolute; top: 0; }
.loader:before { left: -40px; -webkit-animation-delay: -0.32s; animation-delay: -0.32s; }
.loader:after { left: 40px; }
@-webkit-keyframes load7 {
  0%, 80%,
  100% { box-shadow: 0 2.5em 0 -1.3em; }
  40% { box-shadow: 0 2.5em 0 0; }
}
@keyframes load7 {
  0%, 80%,
  100% { box-shadow: 0 2.5em 0 -1.3em; }
  40% { box-shadow: 0 2.5em 0 0; }
}

form { width: 100%; height: 100%; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(3, 1fr); }
input { width: 0px; height: 0px; opacity: 0; overflow: hidden; position: absolute; z-index: -1; }
input + label {
  width: 250px; height: 250px; text-align: center; line-height: 250px;
  display: inline-block; cursor: pointer; transition: 0.4s;
  font-size: 25px; font-weight: bold; text-transform: uppercase; color: rgba(196, 201, 212, 0.5);
  border: solid 10px rgba(62, 25, 167, 0.47); border-radius: 25px;
}
input + label * { pointer-events: none; }
input + label:hover { border: solid 10px #3e19a7; color: #c4c9d4; }

.file-container {
  margin: auto; padding: 0;
  width: 250px; height: 250px;
}
</style>
