class Person {
    birthYear = 1995

    get #age () {
        return new Date().getFullYear() - this.birthYear
    }

    logAge() {
        return this.#age
    }
}

const pers = new Person()
console.log(pers.logAge())