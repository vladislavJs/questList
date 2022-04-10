// function  func() {
//     const person = new WeakRef({
//         name: 'Vladislav'
//     })
//
//     console.log(person.deref().name)
// }
//
// async function start() {
//     await new Promise(resolve => {
//         setTimeout(() => {
//           func()
//         }, 200)
//     })
//
//     await new Promise(resolve => {
//         setTimeout(() => {
//             func()
//         }, 400)
//     })
// }
//

// start()

const registry = new FinalizationRegistry(val => {
    console.log(val, 'finalization')
})

async function start() {
    const ref = {a: 42}
    registry.register(ref, 'MyWeakRef')
}