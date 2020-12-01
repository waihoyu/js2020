// var lichee = function (){
//     console.log("this is lichee 1")
//     return "this  is lichee 2"
// }

// var resulut = lichee()

// var lichee = function (){
//     console.log("this is lichee 1")
//     return "this  is lichee 2"
// }()

// ~function lichee2(){
//     console.log("this is lichee2 ");
// }()


// var lichee = function (){
//     console.log("this is lichee 1")
//     return "this  is lichee 2"
// }

// var resulut = lichee()



var temp3 = ()=> {
    return      function(){console.log("this is Anonymous function")}()
}


temp3()



// 1:张三
// 2：李四

//Object.create()

// var ob1 = {
//     name:"this is my name",
//     printName: function(){
//         console.log(this.name)
//     }
// }

// ob1["printName"]()
var pitaya = function(){
    return 266;
}

var  apple20 = function(x){
    console.log(x())
}

apple20(function(){
    return "this is pitaya";
})

// var jujube = function (i){
//     console.log(i)
// }
(function (i){
    console.log(i())
})(function(){})

x(1200)

(function (i){
    console.log(i())
})(function(){})





var lichee = function (){
    // console.log("this is lichee 1")
    return "this is lichee 2"
}()
console.log(lichee)


// lichee()


~function haw4(){
    console.log("this is haw4")
}()




var banana1 = ()=> 9+9


console.log(banana1())


var haw6 = {
    name:"my name is haw6",
    printName:function(){
        console.log(this.name)
    }
}
haw6.printName()


var hawNut = function(){
    console.log("this is haw nut")
}

var haw7 = function(x){
    console.log(typeof x)
   x()
}

haw7(function(){
    console.log("this is haw nut")
})



var haw8 = function(i){
    console.log(i)
}()

haw8(9999)

//闭包
(function(i){
    console.log(i)
})(9999)