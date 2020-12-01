function nut1(){

    console.log("this is nut1")
    console.log(this)
}


var nut2 =  function(){
    var a = ()=>{
        console.log(this)
    }
    a()
}


nut1()
nut2()
