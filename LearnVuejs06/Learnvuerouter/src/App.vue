<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" tag="button" replace active-class="active">关于</router-link> -->
    <!-- 对于下面两个link，在vue-router的index,js中统一修改点击元素后class对应的默认值 -->
    <!-- <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link> -->

    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->

    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- <router-link :to="'/user/'+userId">用户</router-link> -->
    <!-- <router-link to="/profile">档案</router-link> -->
    <!-- <router-link :to="{path: '/profile', query: {name: 'erin', age: 20}}">档案</router-link> -->

    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <!-- 相当于占位，当需要展示某个组件的时候，就会替代router-view所在位置 -->
    <!-- <router-view></router-view> -->
    <!-- 使被包含的组件保留状态，或避免重新渲染 -->
    <keep-alive exclude="Profile,User">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "lisi"
    }
  },
  methods: {
    // homeClick() {
    //   // 通过代码的方式修改路由 vue-router
    //   // this对应的是当前组件，vue-router为每个组件都添加了$router属性
    //   // push => pushState
    //   // $router就是index.js中导出的VueRouter对象
    //   this.$router.push("/home");
    //   // replace => replaceState，浏览器不能前进后退
    //   // this.$router.replace("/home");
    //   // history.pushState({}, "", "/home"); // 不可取
    //   console.log("homeClick");
    // },
    // aboutClick() {
    //   // push => pushState
    //   this.$router.push("/about");
    //   // replace => replaceState，浏览器不能前进后退
    //   // this.$router.replace("/about");
    //   console.log("aboutClick");
    // },
    // 通过代码的方式跳转路由
    userClick() {
      this.$router.push('/user/'+this.userId);
    },
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'erin',
          age: 20
        }
      });
    }
  },
};
</script>

<style>
/* .router-link-active {
    color: #f00;
  } */
.active {
  color: #f00;
}
</style>
