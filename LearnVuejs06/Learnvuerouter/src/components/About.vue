<template>
  <div>
    <h2>我是关于</h2>
    <p>我是关于内容</p>
  </div>
</template>

<script>
export default {
  name: "About",
  created() {
    // 创建并得到组件之后回调的生命周期函数
    console.log("About created");
  },
  destroyed() {
    // 组件被销毁后回调的生命周期函数
    console.log("About destroyed");
  },
};
</script>

<style>
</style>
