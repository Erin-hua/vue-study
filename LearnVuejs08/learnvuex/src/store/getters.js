export default {
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
}
