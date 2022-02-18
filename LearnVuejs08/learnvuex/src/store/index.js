import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'
// import {
//   INCREMENT
// } from './mutations-type'

// 1.安装插件
Vue.use(Vuex)

// 2.创建Vuex中的Store对象
const state = { // 保存状态（值）
  counter: 1000,
  students: [
    {id: 110, name: "erin", age: 20},
    {id: 111, name: "sakura", age: 22},
    {id: 112, name: "edword", age: 21},
    {id: 113, name: "jk", age: 16},
  ],
  info: {
    name: "erin",
    age: 23,
    height: 1.65
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {// 有一些内容需要从store中抽离的话就定义到modules中
    a: moduleA, // 最终vue会将a放到state中
    // b: {
    //   state: {},
    //   mutations: {},
    //   actions: {},
    //   getters: {},
    // }
  }
})

// 3.导出store对象
export default store

// 对象的解构
// const obj = {
//   name: "erin",
//   age: 20,
//   height: 1.70
// }

// const {age, name, height} = obj; // 虽然顺序和obj对象中的不一样，但是根据名字赋值的
// console.log(name); // 对应的是obj对象中的name
