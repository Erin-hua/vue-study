export default {
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
