
Object2.prototype2 = {
    __proto2__ : null
}
function  Object2(){
    this.__proto2__ = Object2.prototype2;

}






function Object2(){
    this.__proto2__ = Object2.prototype2
}
Object2.prototype2 = {
    __proto2__ :null
}

let obj = new Object2()
console.log(obj.__proto2__.__proto2__)