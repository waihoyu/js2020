var apple = function (){
    console.log('error');
    
}

apple()

function orange(){
    console.log('error orange');
    function redOrange(){
        console.log('error redOrange');
    }
    redOrange()
}

orange.redOrange()

var target = orange();
target