// function sayHello(name) {
//     let message = 'Hello ' + name
//
//     return function (secondName = '????') {
//         console.log(message, secondName)
//     }
// }
//
// let helloElena = sayHello('Elena')
//  helloElena('Sergeevna')
// // console.log(helloElena)

// function createFrameworkManager() {
//     const arr = ['Angular', 'React']
//
//     return {
//         add: function (framework) {
//             arr.push(framework)
//         },
//         log: function () {
//             console.log(arr)
//         }
//     }
// }
//
// const managerOlga = createFrameworkManager()
// const managerOleg = createFrameworkManager()
// managerOlga.add('Vue')
// managerOlga.log()
// managerOleg.add('Next')
// managerOleg.log()

const fib = [1, 1, 2, 3, 5, 8, 13]

for(var i = 0; i < fib.length; i++) { //change var to let
    setTimeout(() => {
        // console.log(fib[i])
    }, 1000)
}

for(var i = 0; i < fib.length; i++) {
    (
        function (j) {
            setTimeout(() => {
                console.log(fib[j])
            }, 2000)
        }
    )(i)
}