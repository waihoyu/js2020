


var newApple = {
   name: "红富士",
   dosomething: function(){
        console.log(this.name);    
   }
}


newApple.dosomething();
console.log(JSON.stringify(newApple));