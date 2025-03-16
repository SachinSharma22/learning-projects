// When we want to copy the elements of a particular array into a new array without affecting the original array, we can use the spread operator.

let studentName = ['sachin', 'saurabh', 'pawan'];

let myName = [...studentName];
console.log(myName);

let maleNames = ['sachin', 'saurabh', 'pawan'];
let femaleNames = ['sandra', 'Lucy', 'Jane'];

let allNames = [...maleNames, ...femaleNames];
console.log(allNames, "Haka");

let userName = {name: "sachin"};
let sex = {sex:"male"};

let user = {...userName, ...sex};

console.log(user);

let userSex = {sex:"female", name:"Jane Doe"};
let user1 = {...userName, ...userSex};
console.log(user1);

let fruits = ["Mango", "Apple", "Mango", "Banana", "Mango"];

let uniqueFruits = [...new Set(fruits)];
console.log(uniqueFruits);

let scores = [12, 33, 6];

const addAll  = (a, b, c) => {
    console.log(a + b + c);
};

addAll(...scores);

let str = "SachinSharma";
const splitString = [...str];
console.log(splitString);

const multiplyArgs = (multiplier, ...otherArgs) =>{
    return otherArgs.map((number)  => {
        return number * multiplier;
    });
};

let multipiedArray = multiplyArgs(6, 5, 7, 9);
console.log(multipiedArray);