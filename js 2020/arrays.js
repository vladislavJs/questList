const wtf = [1, 2, 3, [4, 5], 6, [7, 8, [9, [10, 11]]]]
// console.log(wtf.flat())
// console.log(wtf.flat().flat())
// console.log(wtf.flat().flat().flat())
// console.log(wtf.flat().flat().flat().flat())

console.log(wtf.flat(3))

const newWtf = ['black white', 'green', 'yellow and red']

console.log(newWtf.map((val) => val.split(' ')).flat());
console.log(newWtf.flatMap((val) => val.split(' ')));