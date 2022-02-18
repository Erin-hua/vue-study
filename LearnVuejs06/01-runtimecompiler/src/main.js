// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render: function (createElement) {
    // createElement是一个函数
    // 1.普通用法：createElement('标签',{标签的属性},['']),第三个参数是内容
    // return createElement('h2', { class: 'box' }, ['Hello World', createElement('button', ['按钮'])])

    // 2.传入组件对象：
    return createElement(App)
  }
})
// runtime-compiler(v1)
// template -> ast -> render -> vdom(虚拟DOM) -> UI

// runtime-only(v2)(1.性能更好 2.下面的代码量更少)
// render -> vdom(虚拟DOM) -> UI
