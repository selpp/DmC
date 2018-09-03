import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Session from '@/components/Session'
import Presentation from '@/components/Presentation'
import { tuto_code, tuto_seq } from '@/tutorial/tutorial'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/session',
      name: 'Session',
      component: Session
    },
    {
      path: '/tutorial',
      name: 'Tutorial',
      component: Presentation,
      props: { code: tuto_code, sequences: tuto_seq }
    },
    {
      path: '/donate',
      name: 'Donate',
      component: Home
    }
  ]
})
