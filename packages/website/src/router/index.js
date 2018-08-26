import Vue from 'vue'
import Router from 'vue-router'

import Presentation from '@/components/Presentation'
import Code from '@/components/Code'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Code',
      component: Code
    },
    {
      path: '/presentation',
      name: 'Presentation',
      component: Presentation
    }
  ]
})
