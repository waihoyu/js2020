function chestnut(){
    console.log("我是栗子");
}
chestnut();

let o2 = function olive(){
    console.log("我是橄榄")
}
o2()

let che = function cherry(){
    console.log("我是樱桃")
}()

(function fig(){
    console.log("我是无花果")
})()

void function pomelo(){
    console.log("我是柚子")
}()

function peanut(){
    console.log("我是花生")
}

let pea1 = 'return '  + '`我是一粒${name}`';
let peanut5 = new Function('name', pea1);
peanut5("花生")

let str = 'return ' + '`Hello ${name}!`';
let func = new Function('name', str);
func('Jack') // "Hello Jack!"