import Vue from 'vue';
import App from './App';
import router from './router';
import VueHighlightJS from 'vue-highlightjs';
import 'highlight.js/styles/atom-one-dark.css';

Vue.config.productionTip = false;
Vue.use(VueHighlightJS);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
