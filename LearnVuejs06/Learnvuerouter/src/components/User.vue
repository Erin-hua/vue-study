<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户的相关信息</p>
    <h2>{{userId}}</h2>
  </div>
</template>

<script>
  export default {
    name: "User",
    computed: {
      userId() {
        return this.$route.params.abc
      }
    },
    created() {
      // 创建并得到组件之后回调的生命周期函数
      console.log("User created");
    },
    destroyed() {
      // 组件被销毁后回调的生命周期函数
      console.log("User destroyed");
    }
  };
</script>

<style>
</style>
