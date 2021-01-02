//
//
//
; (function (x) {
    console.log("this is chestnut")
    return ((x) => function () {
        console.log("this is haw")
        x.printName = function () {
            console.log("this is x().printName")
            return this.name
        }
        return 200 + x.printName() + x()
    }())(() => { this.name = 6666; console.log("this is pitaya"); return 3999 })
})()

    + function $() {
        -function () {
            console.log("this is pear")
            void function () {
                console.log("this is nut")
                console.log($.name)
            }()
        }()
        this.name = "my name is $"
    }()

function watermelon(name, price, number) {
    this.name = name,
        this.price = price,
        this.number = number
}

watermelon.prototype.getSum = function () {
    console.log(this.number * this.price)
}


console.log(JSON.stringify(`122333`))

console.log(typeof JSON.parse(JSON.stringify(str1)))


var lichees = [
    () => {
        return function () {
            console.log("this is number 1")()
        }
    },
    +function(){console.log("this is number 2")}(),
    {
        name:"this is lichee 3"
    },
    2000,
    "this is lichee 4",
    null,
    new Object({}),
    Object.create({}),
    Object.prototype,
    new Object({}).__proto__,
    new Date(),
    function licheeNut(){
        return {
            printNut:()=>{
                console.log("thisis printNut")
            }
        }
    }, Object.prototype.tag = "this is tag",
    Object.tag
]


window.$5 = function (){
    console.log("this is $5 in window object")
}

window.document.$5 = function (){
    console.log("this is $5 in window document object")
}

;(console.log(1000/function(){console.log("this is anonymous function "); return function(){return 2000/2}()}()))


function orange(){
    console.log("this is orange")
}
orange.prototype= function (){
    this.name = "张三",
    this.price= 20
    getPrice= function (){return 2000}()
    console.log("this is function" + getPrice)
}

console.log(new orange().__proto__())

var test = [(function(){}()),(j=9)]


//node.js  global


//浏览器v8 引擎  window

