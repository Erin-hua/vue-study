// 配置路由相关的信息，vue-router就是插件
import VueRouter from "vue-router";
import Vue from "vue";

// import Home from "../components/Home";
// import About from "../components/About";
// import User from "../components/User";

// 路由懒加载
const Home = () => import('../components/Home');
const HomeNews = () => import('../components/HomeNews');
const HomeMessage = () => import('../components/HomeMessage');
const About = () => import('../components/About');
const User = () => import('../components/User');
const Profile = () => import('../components/Profile');

// 1.通过Vue.use(插件)来安装插件
Vue.use(VueRouter);

// 2.创建VueRouter(路由)对象
// 配置映射关系，一个url对应一个组件
const routes = [
  {
    path: '',
    // redirect重定向路径''为'/home'
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
    // component: () => import('../components/Home')
    meta: { // 元数据
      title: '首页'
    },
    children: [
      // {
      //   path: '',
      //   redirect: 'news'
      // },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: { // 元数据
      title: '关于'
    },
    // beforeEach: (to, from, next) => { // 路由独享的前置守卫
    //   console.log("about beforeEach");
    //   next();
    // }
  },
  {
    path: '/user/:abc', // :abc用于动态绑定用户id
    component: User,
    meta: { // 元数据
      title: '用户'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: { // 元数据
      title: '档案'
    }
  }
]
const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  // routes: routes
  routes,
  mode: 'history',
  linkActiveClass: 'active'
});

// 前置守卫（guard）
// to和from参数都是route对象，即routes数组中的某个路由
router.beforeEach((to, from, next) => {
  // 从from跳转到to
  // document.title = to.meta.title;
  // 如果按照上述配置，则默认展示的/home/news页面的title会是undefined，应该按照下面的方式配置
  document.title = to.matched[0].meta.title;
  next();
})

// 后置钩子（hook）
// router.afterEach((to, from) => {
//   console.log("afterEach");
// })
// 3.将router对象传入到Vue实例
export default router
