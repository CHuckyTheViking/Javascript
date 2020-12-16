class Animal {
    constructor(name, age, sound = 'generic sound') {
        this.name = name.charAt(0).toUpperCase() + name.slice(1)
        this.age = age
        this.sound = sound
    }

    makeSound() {
        return `${this.name} says ${this.sound}!`
    }
}

class Dog extends Animal {
    constructor(name, age, sound) {
        super(name,age, sound)
        
    }
}
class Cat extends Animal {
    constructor(name, age, sound, lives) {
        super(name,age, sound)

        this.lives = lives
    }
    numberOfLives() {
        return `${this.name} has ${this.lives} lives left.`
    }
}

const dog = new Dog('doogini', 5, 'woof woof')
const cat = new Cat('catini', 3, 'mjau mjau', 9)
console.log(dog)
console.log(dog.makeSound())
console.log(cat)
console.log(cat.makeSound())
console.log(cat.numberOfLives())


// const animal = new Animal('ranini')
// console.log(animal)
// console.log(animal.makeSound())









