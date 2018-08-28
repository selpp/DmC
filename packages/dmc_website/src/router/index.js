import Vue from 'vue';
import Router from 'vue-router';
import Presentation from '@/components/Presentation';

// EXAMPLE PAGE
const { compiler } = require('dmc_compiler');
import { tuto_js, tuto_dmc } from '@/tutorial/tutorial';
const tuto_res = compiler(tuto_dmc);
let tuto_warnings = tuto_res.warnings;
let tuto_seq = tuto_res.sequences;

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Presentation',
      component: Presentation,
      props: { code: '', sequences: {} }
    },
    {
      path: '/example',
      name: 'Example',
      component: Presentation,
      props: { code: tuto_js, sequences: tuto_seq }
    }
  ]
});
