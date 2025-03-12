/*
let myName = 'Max';

if(myName === 'Max'){
    var hobbies = ['sports', 'Cooking'];
    console.log(hobbies);
}

function greet() {
    let age = 30;
    let myName = 'Manuel';
    console.log(myName, age, hobbies);
}
console.log(myName, hobbies);
greet();
*/


// var userName = 'sachin';
// var userName = 'sharma';

// console.log(userName);

// 'use strict'; when you use 'use strict'; this may block some feature of javaScript.
// myName = 'sachin';
// console.log(myName);


function getName() {
    return prompt('your name: ', '')
}

function greet() {
    const userName = getName();
    console.log('Hello ' + userName);
}

greet();