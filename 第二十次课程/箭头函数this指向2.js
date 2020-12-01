var obj = {
    a1:function(){
       var a2 = {
        aa1:function(){
            console.log(this)
        }
       }
    }
}

console.log(obj)