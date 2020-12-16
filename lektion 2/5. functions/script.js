/* 
    FUNCTIONS

    var         =       GLOBAL      typ static i C#
    function    =       GLOBAL      typ static i C#

    let         =       LOCAL
    const       =       LOCAL
*/

//traditionella sättet
function greeting() {
    return 'Välkommen hit!'
}

// det nya sätter (ES6)
const message = () => {
    return 'Du har blivit antagen.'
}

const messagev2 = () => 'Förenklad'
    

// console.log(message())
// console.log(greeting())
// console.log(messagev2())

document.body.innerHTML = `<h2>${greeting()}</h2>`
document.body.innerHTML += `<p>${message()}</p>`



//BAAAD
function RegisterUser() {
    // validate form data
    // register user via api
    // login user via api
    // redirect user to mypages
}

// GOOOD
function validateForm() { 
    if(true) 
        return true
    else 
        return false
    }

function register() {}
function login() {
    if(true) 
        redirect()
    else 
        return false
}
function redirect() {}

function SignUpSignIn (){
    register()
    login()
}



// callback functions

// const func1 = (callback) => {
//     let value = 'test'
//     callback(value)
// }

// func1(value => console.log(value))

function main(data, callback) {
    /* 
        gör en massa saker med data som att
        skicka det till ett api och få nån
        form av respons från det som gör nått
    */

    let successful = false
    if(data === 'Jesper')
        successful = true
    callback(successful)
}

let name = 'Jesper'

main(name, function(data) {
    document.body.innerHTML += `<p>${data}</p>`
})




