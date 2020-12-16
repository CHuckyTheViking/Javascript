
/* 
    JS            C#
-----------------------------------------------
    String         String            Text
    Number         int, float mm     Hel-, decimaltal
    Boolean        Boolean (bool)    True/False
    Object         object, null      Objekt eller ingenting        
    Undefined                        Odefinerat värde
    Symbol
    null           null              Är ingenting

    I JS ÄR: 
    Array, Object, Null = Object


*/

/* String */
var firstName = "Jesper"
var firstName = 'Jesper'
var firstName = `Jesper`

var text = 'Jag är "bäst" i hela världen och helt underbar.'

var firstName = 'Jesper'
var lastName = 'Müllern'
var address = 'Furuvägen 14'
var city = 'Köping'

var speach = 'Hej, jag heter ' + firstName + ' ' + lastName + ' och bor på ' + address + ' i ' + city + '.'
var speach = `Hej, jag heter ${firstName} ${lastName} och bor på ${address} i ${city} `

var modified = speach.length
var modified = speach.toUpperCase()
var modified = speach.toLowerCase()
var modified = speach.concat(text)
var modified = speach.concat('asdasdasdsa ' + text)
var modified = speach.trim()

// var modified = speach.indexOf('Hej')


console.log(modified)



/* Boolean */
// true/false  1/0
var status = true
var status = false


/* Number */
var value = 1
var value = 1.1
var value = 123e1
var value = 123e-1
var value = 0.123456789012345678
var value = 123456789012346789

/* 
    +   lägg till
    -   ta bort
    *   gångra
    /   dela
    %   hur mycket är kvar
    ++  öka med 1
    --  minska med 1

    =   lika med
    +=  lägg till (ersätter inte utan lägger till)
    -=  tar bort (ersätter inte utan tar bort)
    *=  gångrar (ersätter inte utan gångrar)
    /=
    %=

*/

/* NULL och Undefined */
var ref                // undefined
var ref = null         // värdet är null men dataypen är object
var ref = undefined    // undefined

console.log(typeof ref)
console.log(ref)

