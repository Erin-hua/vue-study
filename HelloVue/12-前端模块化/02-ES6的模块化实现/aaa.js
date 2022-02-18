//小明
var name = "erin";
var age = 19;
var flag = true;

function sum(num1, num2) {
  return num1 + num2;
}

if (flag) {
  console.log(sum(20, 30));
}

// 1.导出方式一
export { flag, sum };

// 2.导出方式二，在定义变量的时候就导出
export var num1 = 1000;
export var height = 1.9;

// 3.导出函数/类
export function mul(num1, num2) {
  return num1 * num2;
}

// ES5中导出定义的类
// export function Person() {

// }

// ES6中导出定义的类
export class Person {
  // 构造器
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  run() {
    console.log("Running");
  }
}

// 4.export default
// const address = "长沙市";
// export {
//   address
// }

// const address = "长沙市";
// export default address;

export default function (arg) {
  console.log(arg);
}
