// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'mint-ui/lib/style.min.css'
import Mint from 'mint-ui'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import 'normalize.css'
import 'lib-flexible/flexible.js'

// use mint-ui
Vue.use(Mint)
FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
