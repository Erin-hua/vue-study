export default { // 处理异步操作
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
}
