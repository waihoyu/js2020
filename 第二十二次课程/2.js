// ((x) => function () {
//     console.log("this is haw")
//     x.printName = function () {
//         console.log("this is x().printName")
//         return this.name
//     }
//     return 200 + x.printName() + x()
// }())()

// ()()

// () => { this.name = 6666; console.log("this is pitaya"); return 3999 }


// ;(function (){
//     console.log("this is chestnut")
//     return ()()
// })()


// console.log((function(x){
//     console.log("this is nut")
//     return x
// })(888))










+function () {
    console.log("this is pitaya")
}()






console.log((function (x) {
    console.log("this is pitaya 2")
    x.printName = function () {
        console.log("this is print name")
        return 223
    }
    return x() + x.printName()
})(() => { console.log("this is arrow function"); return 777 }))




var Vnode = {
    tag: 'div',
    children: [
        {
            tag: 'p',
            text: '江西软件大学'
        }
    ]
};



var myUniversity = {
    tag: 'ul',
    attrs: {
        id: 'list'
    },
    children: [
        {
            tag: 'li',
            attrs: { className: 'item' },
            children: ['江西']
        },
        {
            tag: 'li',
            attrs: { className: 'item' },
            children: ['软件']
        }, {
            tag: 'li',
            attrs: { className: 'item' },
            children: ['大学']
        }
    ]
}










var obj = {}
obj.price=20
console.log(obj.price)



