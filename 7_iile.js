// Immediate Invoked Function Expression

const result = []

// for(var i = 0; i < 5; i++) {
//     result.push(function () {
//         console.log(i)
//     })
// }
//
// result[1]()

for(var i = 0; i < 5; i++) {
    (function () {
        var j = i
        result.push( function () {
            console.log(j)
        })
    })()
}

result[3]()