import Vue from 'vue';
import Router from 'vue-router';
import Presentation from '@/components/Presentation';
import Session from '@/components/Session';
import { tuto_js, tuto_dmc } from '@/tutorial/tutorial';

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Presentation,
      props: { source: '', script: {}, in_store: false }
    },
    {
      path: '/session',
      name: 'Session',
      component: Session,
    },
    {
      path: '/session/play',
      name: 'Play',
      component: Presentation,
      props: { source: '', script: {}, in_store: true }
    },
    {
      path: '/tutorial',
      name: 'Tutorial',
      component: Presentation,
      props: { source: tuto_js, script: tuto_dmc, in_store: false }
    }
  ]
});
