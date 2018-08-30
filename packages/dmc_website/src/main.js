import Vue from 'vue';
import App from './App';
import router from './router';
import VueHighlightJS from 'vue-highlightjs';
import 'highlight.js/styles/atom-one-dark.css';
import Vuex from 'vuex';
const { play } = require('./sound/sound');

Vue.config.productionTip = false;

Vue.use(VueHighlightJS);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: { source: null, script: null, sound: play },
  mutations: {
    set_source (state, payload) { state.source = payload.value; },
    set_script (state, payload) { state.script = payload.value; }
  }
});

new Vue({
  store: store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
