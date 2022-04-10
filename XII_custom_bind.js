// function log(phone, mail) {
//     console.log(`${this.name} has phone: ${phone} and has mail: ${mail}`)
// }
// example
// const person = {name: 'Vlad'}
// log.bind(person)('1', 'first case')
// log.bind(person, '2')( 'second case')
// log.bind(person, '3', 'third case')()

// function log(phone, mail) {
//     console.log(`${this.name} has phone: ${phone} and has mail: ${mail}`)
// }

const person = {name: 'Vlad'}

//first way

// function bind(fn, context, ...rest) {
//     return fn.bind(context, ...rest)
// }

// second way

// function bind (fn, context, ...rest) {
//     return function(...args) {
//         const uniqId = Date.now().toString()
//         context[uniqId] = fn
//
//         const result = context[uniqId](...rest.concat(args ))
//
//         delete context[uniqId]
//
//         return result
//     }
// }


// third way(ES5)

// function bind(fn, context) {
//     const args = Array.prototype.slice.call(arguments, 2)
//
//     return function () {
//         const args2 = Array.prototype.slice.call(arguments)
//         fn.apply(context, args.concat(args2))
//     }
// }


// fourth way (ES6)

// function bind(fn, context, ...rest) {
//     return function (...args) {
//         fn.call(context, ...rest.concat(args))
//     }
// }
//
//
//
// bind(log, person)('+38010', 'm10@mail.com')
// bind(log, person, '+38011')( 'm11@mail.com')
// bind(log, person, '+38012', 'm12@mail.com')()


//call

function call(fn, context, ...rest) {
    const uniqId = Date.now.toString()
    context[uniqId] = fn
    const result = context[uniqId](...rest)
    delete context[uniqId]

    return result

}

// call(log, person, '00030003', 'mail ist suks')

//aply

function aply(fn, context, args) {
    const uniqId = Date.now.toString()
    context[uniqId] = fn
    const result = context[uniqId](...args)
    delete context[uniqId]

    return result

}

aply(log, person, ['phone333', 'mail1111'])

