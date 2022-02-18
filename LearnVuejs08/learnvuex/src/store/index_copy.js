import Vue from 'vue'
import Vuex from 'vuex'
import {
  INCREMENT
} from './mutations-type'

// 1.安装插件
Vue.use(Vuex)

// 2.创建Vuex中的Store对象

const moduleA = {
  state: {
    name: "selina"
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  actions: {
    aUpdateName(context) { // 只能commit当前模块的mutations方法
      setTimeout(() => {
        console.log(context)
        context.commit("updateName", "sakura")
      }, 1000)
    },
    // increamentIfOdd({state, commit, rootState}) { // 该写法将从context对象中取出state，commit，rootState这三个属性，被称为对象的解构
    // }
  },
  getters: {
    fullname(state) {
      return state.name + "111"
    },
    fullname2(state, getters) {
      return getters.fullname + "222"
    },
    fullname3(state, getters, rootState) { // 只有module中的getters方法有参数rootState，其对应的是store中的state变量
      return getters.fullname2 + rootState.counter
    }
  }
}

const store = new Vuex.Store({
  state: { // 保存状态（值）
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
  },
  mutations: { // 处理同步操作
    // 方法
    // increment是事件类型
    // (state) { // 自动会有参数state
    //   state.counter++;
    // }是回调函数
    // increment(state) { // 必须有参数state
    //   state.counter++;
    // },
    // 运用mutation常量类型
    [INCREMENT](state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    // 1.普通提交方式对应的mutation写法
    incrementCount(state, count) {
      state.counter += count
    },
    // 2.特殊提交方式对应的mutation写法
    // incrementCount(state, payload) {
    //   state.counter += payload.count
    // },
    addStudent(state, stu) {
      state.students.push(stu)
    },
    updateInfo(state) {
      state.info.name = "sakura"
      // devtools无法跟踪mutations中的异步操作
      // setTimeout(() => {
      //   state.info.name = 'sakura'
      // }, 1000)

      // state.info["address"] = "长沙" //不推荐这么添加新属性，不是响应式的
      // 方法一：响应式添加新属性：Vue.set(要修改的对象, 索引值, 修改后的值 | 要添加的键, 对应的值)
      // set方法将属性address添加到响应式系统中
      // Vue.set(state.info, "address", "长沙")
      // 方法二：给info赋值一个新的对象
      // state.info = {...state.info, "address":"changsha"}

      // 该方法做不到响应式删除属性
      // delete state.info.age
      // 该方法可以响应式删除属性
      // Vue.delete(state.info.age)
    }
  },
  actions: { // 处理异步操作
    // aUpdateInfo(context, payload) { //context相当于store
    //   setTimeout(() => {
    //     context.commit('updateInfo')
    //     // console.log(payload);
    //     // payload() // 此时payload是一个函数
    //     console.log(payload.message);
    //     payload.success()
    //   }, 1000)
    // },
    aUpdateInfo(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo');
          console.log(payload);

          resolve("hello")
        }, 1000)
      })
    }
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20stu(state) {
      return state.students.filter(s => s.age > 20)
    },
    more20stuLength(state, getters) { // 第二个参数不管是什么名字都是getters
      return getters.more20stu.length
    },
    moreAgestu(state) {
      // return function(age) {
      //   return state.students.filter(s => s.age > age)
      // }
      return age => {
        return state.students.filter(s => s.age > age)
      }
    }
  },
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
