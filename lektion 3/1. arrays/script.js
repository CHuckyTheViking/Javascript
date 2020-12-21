/* 
    
    Arrays

    JS          C#
    --------------------------------
    Array[]       Array   string[]
    Array[]       List    List<string>()

*/

    // const array = []
    // console.log(typeof array)

// Går att ha flera olika datatyper i en array-Bör dock inte göras
    // array[0] = 'Jesper'
    // console.log(array)
    // array[1] = {firstName: 'Kalle'}
    // array[2] = 123
    // console.log(array)

    // const names = ['Jesper', 'Kalle', 'Johan', 'Herman']
    // console.log(names)
    // console.log(names.length)
    // console.log(names.indexOf('Kalle'))

    // const people = [
    //     {firstName: 'Jesper', lastName: 'Müllern'},
    //     {firstName: 'Kalle', lastName: 'Karlsson'},
    //     {firstName: 'Johan', lastName: 'Lövsson'},
    //     {firstName: 'Herman', lastName: 'Andersson'},
    //     {firstName: 'Elliot', lastName: 'Müllern'}
    // ]

    // // sök igenom med array.forEach
    // people.forEach(person => {
    //     if(person.firstName === 'Jesper')
    //         console.log(person)
    // })

    // // sök ingeom med for of
    // for(let person of people) {
    //     if(person.firstName === 'Jesper')
    //     console.log(person)
    // }

    // // sök igenom med vanlig for-loop
    // for(let i=0; i < people.length; i++){
    //     if(people[i].firstName === 'Jesper')
    //     console.log(people[i])
    // }

    // /* filtrera ut saker och ting med .filter() */
    // let müllerns = people.filter(person => {
    //     return person.lastName === 'Müllern'
    // })
    // console.log(müllerns)

    // /* mapp upp en specifik property till en ny array .map() */
    // let firstnames = people.map(person => {
    //     return person.firstName
    // })
    // console.log(firstnames)

    // /* const names = []

    // /* .push() =  Lägg till i slutet av listan med .push() */
    // names.push('Jesper')
    // names.push('Elliot')
    // console.log(names)

    // /* .pop() =  ta bort något i slutet av listan .pop() */
    // names.pop()
    // console.log(names)

    // /* .unshift() =  lägg till i början av listan med .unshift() */
    // names.unshift('Hej')
    // console.log(names)

    // /* .shift() =  ta bort något i början av listan med .shift() */
    // names.shift('Hej')
    // console.log(names)

    // /* delete = ta bort något från en specifik position med delete  */
    // delete names[0]
    // console.log(names) */


const names = ['Jesper', 'Elliot', 'Kalle', 'Herman']

    // /* .sort() sorterar något i stigande ordning dvs A-Z 0-9 */
    // names.sort()
    // console.log(names)

    // /* .reverse() Ändra ordningen på listan med .reverse() */
    // names.reverse()
    // console.log(names)

    // /* sortera något i fallande ordning dvs Z-A 9-0 */
    // names.sort()
    // names.reverse()
    // console.log(names)

    // /* nestla olika metoder med varandra */
    // names.sort().reverse()
    // console.log(names)

    // const numbers = [1,3,8,6,10,12,5]
    // console.log(numbers)

    // numbers.sort()
    // console.log(numbers)

// /* .splice() */
// console.log(names)

// // lägg till ett värde på en specifik position
// names.splice(2, 1, 'Anna')
// console.log(names)
// // ta bort ett värde från en specifik position
// names.splice(2,1)
// console.log(names)

// /* .slice() */
// const names2 = names.slice()
// console.log(names2)


