class Person {
    constructor(name = 'Mb Oleg?') {
        this.name = name
    }

    static type = 'AREA'
    static #newType = 'NewArea'
    name = 'Mb Oleg'
    #year = 1995

    static logNewType() {
        return Person.#newType
        // return this.#newType
    }

    get age() {
        return new Date().getFullYear() - this.#year
    }

    set age(age) {
        this.#year = new Date().getFullYear() - +age

    }
}

// console.log(new Person('Max'), new Person())
const person1 = new Person('Olya')
// console.log(person1.age);
// console.log(person1.age = 11 );
// console.log(person1.age);

console.log(Person.logNewType())
// console.log(Person.#newType)