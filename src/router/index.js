import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: _import('index/index'),
      redirect: '/work',
      children: [
        {
          path: 'work',
          name: 'work',
          component: _import('work/work')
        },
        {
          path: 'patient',
          name: 'patient',
          component: _import('patient/patient')
        },
        {
          path: 'find',
          name: 'find',
          component: _import('find/find')
        },
        {
          path: 'personalCenter',
          name: 'personalCenter',
          component: _import('personalCenter/personalCenter')
        },
        {
          path: '/patient/add',
          name: 'addPatient',
          component: _import('patient/patientEdit')
        },
        {
          path: '/patient/edit',
          name: 'editPatient',
          component: _import('patient/patientEdit')
        }
      ]
    },
    {
      path: '/hello',
      name: 'hello',
      component: _import('hello')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // alert(savedPosition)
    return { x: 0, y: 0 }
  }
})
