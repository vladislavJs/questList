// Liskov substitution principle

class Person {

    // access() {
    //     console.log('you have access')
    // }
}

class Old extends Person {
    access() {
        console.log('you have access')
    }
}

class Young extends Person {
    access() {
        console.log('you dont have access')
    }
}

// class Man extends Person {
class Man extends Old {
    canDriveCar() {}
}

class Woman extends Old {
// class Woman extends Person {
    canMakeEat() {}
}

class Children extends Young {
// class Children extends Person {

}

function create(person) {
    person.access()
}

create((new Woman()))
create((new Children()))