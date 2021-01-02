
;(function (x){
    console.log("this is chestnut")
    return (function(x){
        console.log("this is haw")
        x()
        x.printName = function (){
            console.log("this is x.printName")
            return this.name
        }
        return 200 + x.printName()+x()
    })(()=>{
        this.name = 6666
        console.log("this is pitaya")
        return 3999
    })
})()

// var x = ()=>{}()
// x()

var test1 = function (){
    return 0
}()


console.log("a")("b")




Object.tag1 = 100
Object.prototype.tag=200
console.log(Object.tag)


function pitaya (){
    // this.tag = 200
    // console.log("this is obj2")
}
pitaya.tag = 200

pitaya.prototype.tag = 300
Object.prototype = pitaya

var obj1 = new Object();
obj1.__proto__=Object.prototype
obj1.tag1 = 100;
// console.log(Object.prototype.__proto__)
console.log(obj1.tag)


//异步
function pitaya3(){
    console.log("this is pitaya 3")
    setTimeout(function (){
        console.log("this is pitaya 4")
    },3000)
    console.log("this is pitaya 5")
}
pitaya3()



//闭包


function apple (){
    var number=0;
    return function (){
        console.log(number++)
    }
}
var a = apple()
a()
a()
a()



//闭包  原型和原型链   异步
for(var i =0;i<10;i++){
    (function(i){
        setTimeout(function(){
            console.log("this is " + i)
        },2000)
    })(i)
}


//异步  单线程  多线程
function orange(){
    console.log("this is orange 1")
    setTimeout(function(){
        console.log("this is orange 2")
        setTimeout(function(){
            console.log("this is orange 2-1")
        },3000)
    },2000)
    console.log("this is orange 3")
}

orange()


for(let i =0;i<10;i++){
    setTimeout(function(){
        console.log("this is " + i)
    },2000)
}















