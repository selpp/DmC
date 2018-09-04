import Vue from 'vue';
import App from './App';
import router from './router';
import VueHighlightJS from 'vue-highlightjs';
import 'highlight.js/styles/atom-one-dark.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faSpinner, faChessQueen, faChild } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueKatex from 'vue-katex'
 
Vue.config.productionTip = false;
Vue.use(VueHighlightJS);
Vue.use(VueKatex)

library.add(faCoffee, faSpinner, faChessQueen, faChild);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
