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