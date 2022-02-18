<template>
  <div>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>
    <h2>{{$store.getters.moreAgestu(19)}}</h2>
    <h2>{{$store.state.info}}</h2>
  </div>
</template>

<script>
  export default {
    name: "HelloVuex",
    // 如果父子组件之间以共享的方式传递状态，则需要设置属性
    // props: {
    //   counter: Number
    // }
  }
</script>

<style>

</style>
