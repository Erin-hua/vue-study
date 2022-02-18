const app = new Vue({
  el: "#app",
  data: {
    books: [
      {
        id: 1,
        name: "《算法导论》",
        date: "2006-9",
        price: 85.0,
        count: 1,
      },
      {
        id: 2,
        name: "《Unix编程艺术》",
        date: "2006-2",
        price: 59.0,
        count: 1,
      },
      {
        id: 3,
        name: "《编程珠玑》",
        date: "2008-10",
        price: 39.0,
        count: 1,
      },
      {
        id: 4,
        name: "《代码大全》",
        date: "2006-3",
        price: 128.0,
        count: 1,
      },
    ],
  },
  methods: {
    getFinalPrice(price) {
      // toFixed保留几位小数
      return '￥' + price.toFixed(2);
    },
    increment(index) {
      this.books[index].count++;
    },
    decrement(index) {
      this.books[index].count--;
    },
    removeHandle(index) {
      this.books.splice(index, 1);
    }
  },
  computed: {
    totalPrice() {
      let sum = 0;
      // for (let book of this.books) { // 和vue的v-for遍历不一样，原生js是用的for而不是v-for指令中的in
      //   sum += book.price*book.count;
      // }

      // for (let i in this.books) { // i是索引值
      //   sum += this.books[i].price*this.books[i].count;
      // }
      // return sum;

      // reduce
      // 下面方法错误，可能是因为没有prev的初始值？
      //return this.books.reduce((pre, n) => pre + n.price * n.count);
      return this.books.reduce(function (pre, book) {
        return pre + book.price * book.count;
      }, 0);
    }
  },
  filters: { // 过滤器定义的时候有参数，但调用的时候是：参数 | 过滤器名称，即可
    showPrice(price) {
      return '￥' + price.toFixed(2);
    }
  }
});

const nums = [10, 23, 56, 233, 566, 220];

let total = nums.filter(n => n < 100).map(n => n * 2).reduce((preValue, n) => preValue + n);
console.log(total);

// let total = nums.filter(function (n) {
//   return n < 100;
// }).map(function (n) {
//   return n * 2;
// }).reduce(function (preValue, n) {
//   return preValue + n;
// }, 0);
// console.log(total);

// // filter/mao/reduce
// // 1.filter中的回调函数有一个要求：必须返回一个boolean值
// // 返回true时，函数内部会自动将这次回调的n加入到新的数组中并返回
// // 返回false时，函数内部会过滤掉这次的n
// let newNums = nums.filter(function(n){
//   return n < 100;
// });
// console.log(newNums);

// // 2.map中的回调函数，每次返回的值都会加入到新的数组中并返回
// // new2Nums:[20, 46, 112]
// let new2Nums = newNums.map(function(n){
//   return n*2;
// });
// console.log(new2Nums);

// // 3.reduce函数的使用
// // reduce函数对数组中的所有内容进行汇总
// // 下面reduce函数中的第二个参数0代表第一次preValue的值是0
// // 除了第一次以外，preValue都是上一次返回的值
// let total = new2Nums.reduce(function (preValue, n) {
//   return preValue + n;
// }, 0);
// console.log(total);