// 小明
(function () {
  // 1.想使用aaa.js中定义的flag，moduleA可以被称为模块对象
  if (moduleA.flag) {
    console.log("Hello World");
  }

  // 2.想使用aaa.js中定义的sum函数
  console.log(moduleA.sum(40,50));
})();

// CommonJS中的导入
// var aaa = require("./aaa.js");
// var flag = aaa.flag;
// var sum = aaa.sum;
// var {flag, sum} = require("./aaa.js");