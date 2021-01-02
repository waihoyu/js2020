
//1、什么是instanceof

var pitaya ={}

//第一种比较  主要这个地方的Object 到底是什么呢？
console.log( pitaya instanceof Object)

//第二种情况  object的打印结果是什么呢
console.log(Object)

// 下面这两种情况的区别
console.log(new Object.prototype.constructor())
console.log(new Object())

// 韦晓余
// 实验名称：MySQL数据库的安装和基本使用
// 实验目的：
// 1、学会MySQL数据库的下载、安装
// 2、基本掌握数据库的链接配置、使用

// 实验环境：
// win10、mysql数据库安装包、navicat客户端安装
// 日期：2020 11 9   软件技术基础


console.log(typeof Object.prototype )

console.log(global)


//异步的举例，应该增补网络下载图片的
//的实际事例。
// 举例1：早上起床后，突然被学生会叫走了。
//举例2：网页局部刷新
//什么是BOM 什么是DOM


//一种for循环

let arr = [1, 2, 3]
for (let i = 0, len = arr.length; i < len; i++) {
  // ...
}

let arr = [1, 2, 3]
for (let i = 0, val; val = arr[i++]; ) {
  // ...
}



{
  numb1:1;
  numb2:2;
  numb3:3;
  numb4:4
}


var pitaya ={}
pitaya.price=10
console.log(pitaya.price)

//new Object()
var  pitaya3 = {}
console.log(typeof pitaya3)
// 堆  栈
//引用类型  class
//普通类型  int  char double float 

// int a = 10;
var pitaya4 = new Object();

console.log(pitaya3 instanceof Object)
console.log(pitaya4 instanceof Object)

const pitaya5 = 100;
pitaya5 =200

const pitaya6 = {
  name:"zhangsan"
}

pitaya6.name = "lisi"

