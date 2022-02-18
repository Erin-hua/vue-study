<template>
  <div>
    <h2>我是profile</h2>
    <h2>{{$route.query.name}}</h2>
    <h2>{{$route.query.age}}</h2>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    created() {
      // 创建并得到组件之后回调的生命周期函数
      console.log("Profile created");
    },
    destroyed() {
      // 组件被销毁后回调的生命周期函数
      console.log("Profile destroyed");
    }
  };
</script>

<style>
</style>
