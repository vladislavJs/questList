// const person = {
//     profession: 'programmer',
//     skill: function () {
//         console.log(this)
//     },
//     skill2: (name) => console.log(this)
// }

// person.skill()
// person.skill2('oleg')
//
// person.skill('1h', 'i know how this work')
//
// const person2 = {
//     profession: 'teacher'
// }
//
// person.skill.call(person2, '3h', 'its not my work')
// person.skill.apply(person2, ['3h', 'its not my work'])
// person.skill.call(person2, ...['3h', 'its not my work'])
// person.skill.bind(person2, ...['3h', 'its not my work bind'])()

// function logThis() {
//     console.log(this)
// }
//
// const something = {
//     name: ' Oleg'
// }

// logThis.call(something)

const f = () => console.log(this)
f()