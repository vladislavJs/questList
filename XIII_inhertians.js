class Programmer {
    constructor(name) {
        this.name = name
    }

    code() {
        console.log(`this ${this.name} is working`)
    }
}

class FrontEnd extends Programmer{
    vue() {
        console.log(`this ${this.name} is working on front-end part`)
    }
}

class BackEnd extends Programmer{
    nodejs() {
        console.log(`this ${this.name} is working on back-end part`)
    }

}

const programmer = new Programmer('Ivan')

const frontProgrammer = new FrontEnd('Anna')
frontProgrammer.code()
frontProgrammer.vue()

const backendProgrammer = new BackEnd('Oleg')
backendProgrammer.code()
backendProgrammer.nodejs()

