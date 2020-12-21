
/* Polymorphism */

class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    connectToDatabase () {
        console.log('connecting to database')
    }

}

class Dog extends Animal {
    constructor(name, age) {
        super(name, age)
    }

    connect() {
        super.connectToDatabase()
        console.log(`${this.name} says woof woof`)
    }
}


const dog = new Dog('Flexi', 23)

console.log(dog.connect())




