<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
    <h2>{{message}}</h2>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        message: "Hello",
        path: '/home/news'
      }
    },
    created() { // 创建并得到组件之后回调的生命周期函数
      console.log("Home created");
      // document.title = "首页";
    },
    destroyed() { // 组件被销毁后回调的生命周期函数
      console.log("Home destroyed");
    },
    activated() { // 界面处于活跃状态时会调用该生命周期函数
      // console.log("activated");
      this.$router.push(this.path);
    },
    // deactivated() { // 界面处于不活跃状态时会调用该生命周期函数
    //   // console.log("deactivated");
    //   this.path = this.$route.path;
    // },
    // 组件内导航:导航离开该组件的对应路由时调用，可以访问组件实例`this`
    beforeRouteLeave (to, from, next) {
      this.path = this.$route.path;
      next();
    },
    // mounted() { // 当前template挂载到DOM之后回调的生命周期函数
    //   console.log("mounted");
    // },
    // updated() { // 界面发生一次刷新时会回调的生命周期函数
    //   console.log("updated");
    // }
  };
</script>

<style>
</style>
