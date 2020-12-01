//第一种
var pi = function pitaya(){
    console.log("我是火龙果")
}

//第二种
//第二种方式 （特别要注意的是  我  前面的那个  反引号 模板字符串）

let pea1 = 'return '  + '`我是一粒${name}`';
let peanut5 = new Function('name', pea1);
console.log(peanut5("花生"))

var  peanut6 = function(name){
     return "我是一粒"+ name;
}





