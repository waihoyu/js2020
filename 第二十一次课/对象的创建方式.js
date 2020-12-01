

//  

let melon = {}
let melon2 ={
    name:"我是甜瓜",
    price:30,
    weight:2,
    origin:"海南省",
    color:false,
    nut:{
        name:"我的是甜瓜的种子",
        price:40
    },
    printPrice:function(){
        console.log("我是价格")
    },
    printOrigin:()=>{
        console.log("原产地")
    }
}



var melon3 = new Object()
var melon4 = new Object({})

var melon5 = new Object({
    name:"我是甜瓜",
    price:30,
    weight:2,
    origin:"海南省",
    color:false,
    nut:{
        name:"我的是甜瓜的种子",
        price:40
    },
    printPrice:function(){
        console.log("我是价格")
    },
    printOrigin:()=>{
        console.log("原产地")
    }
})


var melon7 = new Object(666)

var melon8 = new Object("1234567")
// function Object2(x){
// // x()
// 666
// }

function Person(name,sex,age,address){
    this.name= name,
    this.sex = sex,
    this.age =age,
    this.address = address,
    this.sayName=function(){
        console.log(this.name)
    }
}

Person.prototype.sayName2 = function(){
    console.log("this is say name 2")
}


var p1 = new Person("张三",'男',20,"南昌市")
console.log(p1);
console.log(p1.__proto__);
p1.sayName()
p1.sayName2()

// Object2 ={}


function Object2(){
    this.__proto2__ = Object2.prototype2
}
Object2.prototype2 = {
    __proto2__: null
}

var obj = new Object2()
console.log(obj.__proto2__.__proto2__)





