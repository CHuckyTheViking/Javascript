/* 
    DOM - document object model
*/


// document.body.innerText = "<h1>Detta är en rubrik</h1>"
// document.body.innerHTML = "<h1>Detta är en rubrik</h1>"

// document.getElementById('results').innerText = "Hejsan";
// document.getElementById('results').innerHTML = "Hejsan";
// console.log(document.getElementById('result').innerText)

// Detta fungerar på ett input element
var name = document.getElementsByTagName('input')[0].value
var name = document.getElementById('name').value
var name = document.getElementsByName('name')[0].value
var name = document.getElementsByClassName('input-text')[0].value

// Detta fungerar på alla andra element
var last = document.getElementsByTagName('div')[0].innerText
var last = document.getElementById('results').innerText
var last = document.getElementsByClassName('div-text')[0].innerText






console.log(name)
console.log(last)


