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