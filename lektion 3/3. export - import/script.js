import Person from "./models/Person.js";
import { write, validate } from "./function.js";

const person = new Person('Jesper', 'Müllern')
write(person)

// console.log(validate(person.firstName))
// console.log(validate(person.lastName))

// if(!validate(person.firstName) || !validate(person.lastName))
//     console.log('Validering av användaren misslyckades!')
// else
//     console.log('Validering av användaren lyckades!')



validate("BytMig123", 8, (res) => {
    if(res.statusCode === 2001)
        console.log(res.message)
    if(res.statusCode === 4001)
        console.error(res.statusCode, res.message)
})
    


