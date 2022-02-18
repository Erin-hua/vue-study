import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
  // 相当于以下代码，等价于runtime-compiler版本的components和template的结合
  // render: function(h) {
  //   return h(App)
  // }
})
// vue文件中的template由vue-template-compiler处理了
// render -> vdom(虚拟DOM) -> UI
