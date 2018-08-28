import Vue from 'vue'
import Router from 'vue-router'

import Presentation from '@/components/Presentation'
import Code from '@/components/Code'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Presentation',
      component: Presentation,
      props: {
        code: '\n' +
          '// TEST TEST TEST\n' + 'let a1 = function(params) {\n' + '\treturn params;\n' + '}\n\n' +
          '// TEST TEST TEST\n' + 'let a2 = function(params) {\n' + '\treturn params;\n' + '}\n\n' +
          '// TEST TEST TEST\n' + 'let a3 = function(params) {\n' + '\treturn params;\n' + '}\n\n' +
          '// TEST TEST TEST\n' + 'let a4 = function(params) {\n' + '\treturn params;\n' + '}\n\n' +
          '// TEST TEST TEST\n' + 'let a5 = function(params) {\n' + '\treturn params;\n' + '}\n\n' +
          '// TEST TEST TEST\n' + 'let a6 = function(params) {\n' + '\treturn params;\n' + '}\n\n' +
          '// TEST TEST TEST\n' + 'let a7 = function(params) {\n' + '\treturn params;\n' + '}\n\n' +
          '// TEST TEST TEST\n' + 'let a8 = function(params) {\n' + '\treturn params;\n' + '}\n\n' +
          '// TEST TEST TEST\n' + 'let a9 = function(params) {\n' + '\treturn params;\n' + '}\n\n'
      }
    }
  ]
})
