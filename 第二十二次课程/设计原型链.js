function Object2(){
    this.__proto2__ = Object2.prototype2 
}
Object2.prototype2 = {
    __proto2__: null,
    constructor:Object2,
    // prototype2:Object2.prototype2
};

var obj1 = new Object2()
console.log(obj1.__proto2__.__proto2__)


function Function2(){

}
Function2.prototype2 ={

}

function pear2(name){
    return "this is  " + `${name} !`
}

console.log(pear2("桃子"))


