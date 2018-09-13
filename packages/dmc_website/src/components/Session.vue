<template>
  <Presentation v-if="presentation == true" :objects="objects"/>
  <div v-else id="session">
    <div id="session-container">
      <div>
        <div v-if="stage == null" class="stage-null">
          <input name="zip" id="zip" type="file" @change="read_zip($event)" accept=".zip"/>
          <label for="zip" @click="click" v-on:mouseover="hover">
            <strong>zip</strong>
          </label>
        </div>

        <div v-if="stage == 'loading'" class="stage-loading">
          <div class="lds-grid">
            <div></div><div></div><div></div>
            <div></div><div></div><div></div>
            <div></div><div></div><div></div>
          </div>
        </div>

        <div v-if="stage == 'loaded' && objects.dmc.warnings.length <= 0" class="stage-loaded">
          <div>&#10004;</div>
        </div>
        <div v-if="stage == 'loaded' && objects.dmc.warnings.length > 0" class="stage-warnings" @click="remove_warnings" v-on:mouseover="hover">
          <div>!</div>
        </div>
      </div>

      <div>
        <transition name=slideright>
          <div v-if="stage == 'loaded'" class="stage-next" @click="start_session" v-on:mouseover="hover">
            <div><strong>&#10148;</strong></div>
          </div>
        </transition>
      </div>
    </div>

    <div id="session-warnings">
      <transition name=slide>
        <div v-if="stage == 'loaded' && objects.dmc.warnings.length > 0">
          <h2>Warnings</h2>
          <p v-for="(wm, index) in warning_msg" :key="index">{{ wm }}</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
const { compiler } = require('dmc_compiler');
import Presentation from '@/components/Presentation';
import sound from '@/sound/sound';
import { load } from '@/zip/zip';

export default {
  name: 'Session',
  components: { Presentation },
  data: function() {
    return {
      presentation: false,
      stage: null, objects: null
    };
  },
  computed: {
    warning_msg: function() {
      if(this.objects.dmc.warnings) return this.objects.dmc.warnings.map((w) => { return w.modal; } );
      else return [];
    }
  },
  methods: {
    remove_warnings: function() { this.click(); this.stage = null; this.objects = null; this.presentation = false; },
    hover: function() { sound.play('BUTTON_HOVER'); },
    click: function() { sound.play('BUTTON_CLICK'); },
    read_zip: function(e) {
      let file = e.target.files[0]; this.stage = 'loading';
      load(file).then(objects => {
        objects.dmc = compiler(objects.dmc); this.objects = objects;
        sound.play((objects.dmc.warnings.length > 0)? 'FILE_WARNING' :'LOADING');
        this.stage = 'loaded';
      }).catch(e => { sound.play('FILE_WARNING'); this.stage = null; });
    },
    start_session: function() {
      sound.play('LOADING');
      this.presentation = true;
    }
  }
}
</script>

<style scoped>
#session {
  margin: 0px;
  padding: 0px;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  background-color: #dadee7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
#session-container {
  margin: 0px;
  padding: 50px 0px;
  top: 0px;
  left: 0px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-content: center;
  background: linear-gradient(
    rgba(0, 0, 0, 0.62),
    rgba(0, 0, 0, 0.62)),
    url('../assets/bckg.png');
}
#session-warnings {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  margin: 0px;
  padding: 0px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: center;
  align-content: flex-end;
  pointer-events: none;
}
#session-warnings div {
  width: 100%;
  padding: 50px 0px;
  height: 150px;
  margin: auto;
  font-size: 14px;
  font-weight: bold;
  overflow-y: scroll;
  background-color: #17181c;
  text-align: center;
  pointer-events: all;
  box-shadow: -1px 2px 10px 5px rgba(0, 0, 0, 0.5) inset;
  color: #dadee7;
}
#session-warnings h2 {
  padding: 0px;
  margin: 0px;
  margin-bottom: 25px;
  font-size: 25px;
  border: none;
  color: #a75919;
}

.slide-enter-active { transition: 1.0s; }
.slide-enter { transform: translateY(100%); }

.slideright-enter-active { transition: 1.0s; }
.slideright-enter { transform: translateX(100%); }

input + label * { pointer-events: none; }
input { width: 0px; height: 0px; opacity: 0; overflow: hidden; position: absolute; z-index: -1; }
input + label { width: 100%; height: 100%; margin: 0; padding: 0; display: inline-block;
  line-height: 250px; text-align: center; cursor: pointer; }

.stage-null { width: 250px; height: 250px; margin: auto;
  display: flex; flex-direction: column; justify-content: center; align-content: center;
  font-size: 25px; font-weight: bold; text-transform: uppercase; color: #dadee7;
  border: solid 10px #3e19a7; border-radius: 25px; cursor: pointer; transition: 0.4s; }
.stage-null:hover {
  background-color: rgba(62, 25, 167, 0.5);
}

.stage-loading { width: 250px; height: 250px; margin: auto;
  display: flex; flex-direction: column; justify-content: center; align-content: center;
  border: solid 10px #193da7; border-radius: 25px; transition: 0.4s; }

.stage-loaded { width: 250px; height: 250px; margin: auto;
  display: flex; flex-direction: column; justify-content: center; align-content: center;
  color: #dadee7; text-align: center;
  border: solid 10px #19a767; border-radius: 25px; transition: 0.4s; }
.stage-warnings { width: 250px; height: 250px; margin: auto;
  display: flex; flex-direction: column; justify-content: center; align-content: center;
  color: #dadee7; text-align: center; font-weight: bold; cursor: pointer;
  border: solid 10px #a75919; border-radius: 25px; transition: 0.4s;}
.stage-warnings:hover {
  background-color: rgba(167, 89, 25, 0.5);
}
.stage-next { width: 250px; height: 250px; margin: auto;
  display: flex; flex-direction: column; justify-content: center; align-content: center;
  color: #dadee7; text-align: center; cursor: pointer;
  border: solid 10px #3e19a7; border-radius: 25px; transition: 0.4s; }
.stage-next:hover {
  background-color: rgba(62, 25, 167, 0.5);
}

.stage-loaded div { width: 100%; height: 100%; margin: 0px; padding: 0px;
  display: grid; grid-template-columns: 1fr; justify-content: center; align-content: center;
  font-size: 120px; animation: stage-2 1.8s linear infinite; }
@keyframes stage-2 {
  0%, 100% { font-size: 120px; }
  50% { font-size: 140px; }
}

.stage-warnings div { width: 100%; height: 100%; margin: 0px; padding: 0px;
  display: grid; grid-template-columns: 1fr; justify-content: center; align-content: center;
  font-size: 110px; animation: stage-2-warnings 1.0s linear infinite; }
@keyframes stage-2-warnings {
  0%, 100% { font-size: 110px; }
  50% { font-size: 130px; }
}

.stage-next div { width: 100%; height: 100%; margin: 0px; padding: 0px;
  display: grid; grid-template-columns: 1fr; justify-content: center; align-content: center;
  font-size: 120px; animation: stage-2-next 1.8s linear infinite; pointer-events: none; }
@keyframes stage-2-next {
  0%, 100% { font-size: 120px; }
  50% { font-size: 140px; }
}

.lds-grid { width: 100%; height: 100%; display: grid; grid-template-columns: repeat(3, 1fr); }
.lds-grid div { background-color: #dadee7; border-radius: 50%; margin: 30px; animation: lds-grid 1.8s linear infinite; }
.lds-grid div:nth-child(1) { transform: translate(40px, 40px); animation-delay: -0.8s; }
.lds-grid div:nth-child(2) { transform: translate(0px, 40px); animation-delay: -0.4s; }
.lds-grid div:nth-child(3) { transform: translate(-40px, 40px); animation-delay: -0.0s; }
.lds-grid div:nth-child(4) { transform: translate(40px, 0px); animation-delay: -0.0s; }
.lds-grid div:nth-child(5) { transform: translate(0px, 0px); animation-delay: -0.8s; }
.lds-grid div:nth-child(6) { transform: translate(-40px, 0px); animation-delay: -0.4s; }
.lds-grid div:nth-child(7) { transform: translate(40px, -40px); animation-delay: -0.4s; }
.lds-grid div:nth-child(8) { transform: translate(0px, -40px); animation-delay: -0.0s; }
.lds-grid div:nth-child(9) { transform: translate(-40px, -40px); animation-delay: -0.8s; }
@keyframes lds-grid {
  0%, 100% { opacity: 1; margin: 30px; }
  50% { opacity: 0.5; margin: 25px; }
}
</style>
