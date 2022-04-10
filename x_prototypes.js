// function Cat(name, color) {
//     this.name = name
//     this.color = color
// }
//
// Cat.prototype.voice = function () {
//     console.log(`${this.name} says hello`)
// }
//
// const cat = new Cat('Nigg', 'white')
// cat.voice()

// function Person(){}
// Person.prototype.legs = 2
// Person.prototype.skin = 'yellow'
//
// const person = new Person()
// person.name = 'Vlad'
//
// console.log(person.hasOwnProperty('name'))
// console.log(person.hasOwnProperty('legs'))

const v1 = {name: 'v1'}
const v2 = Object.create(v1)
console.log(v2)
console.log(v2.name)
console.log(v2.hasOwnProperty('name'))
console.log(v2.__proto__ === v1)