function nut(){

}
console.log(nut.prototype== new nut().__proto__)

console.log(nut.prototype.__proto__==Object.prototype)
console.log(nut.prototype.__proto__.__proto__)

//闭包
function pear(){
    var number =0;
    return function (){
        console.log(number++)
    }
}

var p1 = pear()
p1()
p1()
p1()

function pear2(){
    var number=0;
    console.log(number++)
}

pear2()
pear2()
pear2()
pear2()

var test = 123
let test1 =234


