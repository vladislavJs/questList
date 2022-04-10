function createProgrammer(name) {
    const programmer = {name}
     return {
        ...programmer,
        ...canCode(programmer)
     }
}

function canCode({name}) {
    return {
        code: () => {console.log(`${name} is working`)}
    }
}

function createFrontEndProgrammer(name) {
    const programmer = createProgrammer(name)

    return {
        ...programmer,
        ...canFrontEnd(programmer)
    }
}

function canFrontEnd({name}){
    return {
        front: () => console.log(`${name} is front-end dev`)
    }
}

function createBackEndProgrammer(name) {
    const programmer = createProgrammer(name)

    return {
        ...programmer,
        ...canBackEnd(programmer)
    }
}

function createFullStack(name) {
    const programmer = createProgrammer(name)

    return {
        ...programmer,
        ...canFrontEnd(programmer),
        ...canBackEnd(programmer)
    }
}

function canBackEnd({name}){
    return {
        back: () => console.log(`${name} is back-end dev`)
    }
}

const programmer1 = createProgrammer('Oleg')
const programmer2 = createBackEndProgrammer('Ivan')
programmer2.code()
programmer2.back()
// programmer1.code()

const prog3 = createFullStack('Vladislav')
prog3.back()
prog3.front()
prog3.code()