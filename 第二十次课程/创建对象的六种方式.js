var pitaya = {}

var pitaya2 = {
    name:"我是火龙果",
    price:32,
    weight:1000,
    origin:"海南",
    printPrice:function(){
        console.log(this.price)
    }
}


var pitaya3 = Object.create(null)


var pitaya4 = new Object();
var pitaya5 = new Object("我是火龙果5");
var pitaya6 = new Object(6666)
var pitaya7 = new Object({})
var pitaya8 = new Object({x:1})
var pitaya9 = new Object({
    name:"我是火龙果9",
    printName:()=>{
        console.log(this.name)
    }
})

var pitaya11 = Object.create({},{xxx:"我是火龙果10"})

var pitaya10 = Object({})

var pitaya13 = Object.create(Object.prototype, {
    // price会成为所创建对象的数据属性
    price: { 
      writable:true,
      configurable:true,
      value: "898989" 
    },
    // printPrice会成为所创建对象的访问器属性
    printPrice: {
      configurable: false,
      get: function() { return this.price },
      set: function(value) {
        console.log("设置价格为", value);
      }
    }
  });



  var pitaya4 = new Object();
  pitaya4.name="我是火龙果4"
  pitaya4.price=32
  pitaya4.origin="海南省"
  pitaya4.date="20201125"
  pitaya4.color="red"
  pitaya4.printName=function(){
      console.log(this.name);
  }
  pitaya4.printPrice=()=>{
      console.log(this.price);
      console.log(this);
  }

  function testPitaya4(){
    pitaya4.printPrice()
  }
  testPitaya4()

Object.prototype.id="nut6"
  var n5 = function nut5(){
    //   this.id="nut5"
      var nn = ()=>{
          console.log(this.id)
      }
      nn()
  }

  n5()