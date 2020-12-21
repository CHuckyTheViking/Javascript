/* OOP - Objekorienterad Programmering */

/* 
    Encapsulation
    Inheritance
    Polymophism
    Abstractions

*/

/* Encapsulation   (GET = READ, SET = WRITE)  */
// class Product {
//     constructor(name, desc, price) {
//         this.name = name
//         this.desc = desc
//         this.price = price
//     }

//     inStock() {
//         return true
//     }

//     changeInStockStatus(status) {
//         this.inStock = status
//         return this.inStock
//     }

//     get inclVat() {
//         return this.price * 1.25
//     }

// }

// let product = new Product('Product 1', 'desc for product', 100)

// console.log(product)
// console.log(product.inStock)
// console.log(product.inclVat)

// product.inStock = 'taadaaa'
// product.changeInStockStatus(false)

// console.log(product.inStock)

// product.inclVat = '123123'
// console.log(product.inclVat)


class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    get DisplayName() {
        return `${this.firstName} ${this.lastName}`
    }

    set DisplayName(value) {
        const names = value.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }

}

const person = new Person('Jesper', 'Müllern')
console.log(person.DisplayName)

person.DisplayName = 'Kalle Anka'
person.firstName = 'Elliot'

console.log(person.DisplayName)
console.log(person.firstName)
console.log(person.lastName)



