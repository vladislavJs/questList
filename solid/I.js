// interface segregation principle

class Animal {
    constructor(name) {
        this.name = name
    }

    // fly() {}
    // walk() {}
    // swim() {} not correct
}

class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}

const swimmer = {
    swim() {}
}

const flyer = {
    fly() {}
}

const walker = {
    walk(){}
}

Object.assign(Eagle.prototype, flyer)
const eagle = new Eagle('eagle')
eagle.fly()