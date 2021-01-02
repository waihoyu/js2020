

function $(x){
    if(typeof x == "function"){
        x()
    }
    else{
        console.log(x)
    }
}


$(function(){
    console.log("this is $ function called")
})


function  $2(x){
    //console.log(typeof x)
    if(typeof x == "string"){
        let  targets = window.document.getElementsByTagName(x)
        if(targets.length>0){
            let array = targets;
            for (let index = 0; index < array.length; index++) {
                const element = array[index];
                element.style.backgroundColor="red"
                
            }        }
    }
}
$2("div")



let lichee3 = !function(){
    console.log("this is lichee3")
    return 0
}()

console.log(lichee3)

