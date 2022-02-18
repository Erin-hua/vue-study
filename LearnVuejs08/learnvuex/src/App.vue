<template>
  <div id="app">

    <h2>----App内容：modules中的内容----</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <h2>{{$store.getters.fullname3}}</h2>
    <button @click="asyncUpdateName">异步修改名字</button>

    <h2>----App内容：info对象的内容是否是响应式的----</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>

    <h2>----APP内容----</h2>
    <!-- <h2>{{message}}</h2>
    <h2>{{counter}}</h2>
    <button @click="counter++">+</button>
    <button @click="counter--">-</button> -->

    <!-- 如果不希望父子组件之间以如下共享的方式传递状态（值），则可以用vuex的方式 -->
    <!-- <hello-vuex :counter="counter"/> -->

    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <!-- 不建议用以下方式直接修改store中的内容 -->
    <!-- <button @click="$store.state.counter++">+</button>
    <button @click="$store.state.counter--">-</button> -->
    <button @click="addition">+</button>
    <button @click="substraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">增加学生</button>

    <h2>----App内容：getters相关信息----</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <!-- <h2>{{more20stu}}</h2> -->
    <h2>{{$store.getters.more20stu}}</h2>
    <!-- <h2>{{$store.getters.more20stu.length}}</h2> -->
    <h2>{{$store.getters.more20stuLength}}</h2>
    <!-- 给getters中的方法传递参数 -->
    <h2>{{$store.getters.moreAgestu(19)}}</h2>

    <h2>----App内容：info对象的内容是否是响应式的----</h2>
    <h2>{{$store.state.info}}</h2>

    <h2>----Hello Vuex内容----</h2>
    <hello-vuex />
  </div>
</template>

<script>
  import HelloVuex from './components/HelloVuex'
  import{
    INCREMENT
  } from './store/mutations-type'

  export default {
    name: 'App',
    data() {
      return {
        message: "Hello App",
        // counter: 0
      }
    },
    components: {
      HelloVuex
    },
    methods: {
      addition() {
        // this.$store.commit('increment');
        this.$store.commit(INCREMENT);
      },
      substraction() {
        this.$store.commit('decrement');
      },
      addCount(count) {
        // 1.普通提交风格，mutation中incrementCount方法接收的第二个参数就是count
        this.$store.commit("incrementCount", count)

        // 2.特殊提交风格，，mutation中incrementCount方法接收的第二个参数是一个对象：{type: "incrementCount", count}
        // this.$store.commit({
        //   type: "incrementCount",
        //   count
        // })
      },
      addStudent() {
        const stu = {id: 114, name: "tom", age: 35}
        this.$store.commit("addStudent", stu)
      },
      updateInfo() {
        // this.$store.commit("updateInfo")
        // this.$store.dispatch("aUpdateInfo", "payload")
        // this.$store.dispatch("aUpdateInfo", () => {
        //   console.log("里面已经完成了");
        // })

        // this.$store.dispatch("aUpdateInfo", {
        //   message: "信息",
        //   success: () => {
        //     console.log("里面已经完成了")
        //   }
        // })

        this.$store
          .dispatch("aUpdateInfo", "信息") // 前两行返回得到的就是index.js中aUpdateInfo方法返回的Promise对象
          .then(res => {
            console.log("里面完成了提交")
            console.log(res)
          })
      },
      updateName() {
        this.$store.commit("updateName", "list");
      },
      asyncUpdateName() {
        this.$store.dispatch("aUpdateName");
      }
    },
    computed: {
      // more20stu() {
      //   return this.$store.state.students.filter(s => s.age > 20)
      // }
    }
  }
</script>

<style>
</style>
