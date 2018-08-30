import Vue from 'vue';
import Router from 'vue-router';
import Presentation from '@/components/Presentation';
import Session from '@/components/Session';
import { tuto_code, tuto_seq } from '@/tutorial/tutorial';

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Presentation,
      props: { source: '', script: {}, in_store: false, auto_play: false }
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
      props: { source: '', script: {}, in_store: true, auto_play: false }
    },
    {
      path: '/tutorial',
      name: 'Tutorial',
      component: Presentation,
      props: { source: tuto_code, script: tuto_seq, in_store: false, auto_play: false }
    }
  ]
});
