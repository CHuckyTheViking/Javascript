
/* 
    CLASSES
*/


// göra 3 person med object = inte optimalt

    let po1 = {
        firstName: 'Jesper',
        lastName: 'Müllern',
        fullName: function() {
         return  `${this.firstName} ${this.lastName}`
        }
    }

    let po2 = {
        firstName: 'Jesper',
        lastName: 'Lövsson',
        fullName: function() {
            return  `${this.firstName} ${this.lastName}`
           }
    }

    let po3 = {
        firstName: 'Jesper',
        lastName: 'Karlsson',
        fullName: function() {
            return  `${this.firstName} ${this.lastName}`
           }
    }


// göra 3 personer med en klass = optimalt

    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName
            this.lastName = lastName
        }

        fullname() {
            return  `${this.firstName} ${this.lastName}`
        }
    }

    var pc1 = new Person('Jesper', 'Müllern')
    var pc2 = new Person('Jesper', 'Lövsson')
    var pc3 = new Person('Jesper', 'Karlsson')

    pc1.age = 25

    console.log(pc1, po1)


