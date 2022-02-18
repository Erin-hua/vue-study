import { INCREMENT } from './mutations-type'

export default { // 处理同步操作
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
}
