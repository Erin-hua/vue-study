import Vue from 'vue'
import App from './App'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
// 将store挂载到Vue对象后，所有的Vue组件都会有$store对象
new Vue({
  el: '#app',
  store, // Vue.prototype.$store = store
  render: h => h(App)
})
