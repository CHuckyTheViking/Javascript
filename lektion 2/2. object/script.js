
/* 
    OBJECT

    key:value pair

*/

/* Javascript  Object*/
var person = {
    "firstName": "Jesper",
    "lastName": "Müllern",
    "age": 25
}

var person = {
    firstName: 'Jesper',
    lastName: 'Müllern',
    age: 25,
    hair: ['gold', 'short'],
    address: {
        addressline: 'Furuvägen 14',
        zipcode: '70223',
        city: 'Köping'
    },

    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    }
}

// console.log(person)
// console.log(person.fullName())

/* JSON = Javascript Object Notation 

    {
        "firstName": "Jesper",
        "lastName": "Müllern",
        "age": 25
    }
*/

var json =  '{"firstName": "Jesper", "lastName": "Müllern","age": 25}'

// JSON -> JS Object (JsonConvert.DeserializeObject<>())
var parsedjson = JSON.parse(json)
// console.log(parsedjson)

// JS Object -> JSON
var json2 = JSON.stringify(person)
console.log(json2)

console.log(person.address.addressline)
console.log(person['address']['addressline'])

// destructing object

    // let firstName = person.firstName
    // let firstName = person.lastName
    // let age = person.age
    // let addresslines = person.address.addressline

let {firstName, lastName, age} = person
console.log(firstName)





