var myUniversity = {
    name: 'Jiangxi Software University ',
    content: "You"
};

myUniversity.name = "Jiangxi Software University"
myUniversity.content="You"

// JavaScript 
// 视图控制器 
var userInfo = {}; 
Object.defineProperty(userInfo, "nickName", { get: function() { 
    return document.getElementById('nickName').innerHTML; }, 
set: function(nick) { document.getElementById('nickName').innerHTML = nick; } 
}); 

Object.defineProperty(userInfo, "introduce", 
    { 
        get: function() { 
            return document.getElementById('introduce').innerHTML; 
        }, 
        set: function(introduce) { 
            document.getElementById('introduce').innerHTML = introduce; 
    } 
}); 
userInfo.nickName = "xxx"; userInfo.introduce = "我是井冈蜜柚，我来自江西，..."




var pitaya = {}; 
Object.defineProperty(pitaya, 'price', 
  { 
      set: function(newValue) { 
          console.log('你要赋价格给我，我的新价格是：'+ newValue); 
        },
      get: function() { 
          console.log("你取我的价格"); 
          return 666; //注意这里，我硬编码返回666
        } 
  }); 
pitaya.price = 888; //打印 你要赋价格给我,我的新价格是1 
console.log(pitaya.price); //打印 你取我的价格 666



