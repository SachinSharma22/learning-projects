console.log(Math.random() * 10);
console.log(Math.sqrt(5));
console.log(Math.pow(2, 10));

let curr = new Date();
let date = new Date('June 20 1920 07:15');
console.log(date);
console.log(curr);



// Passing functions as a parameter
let a = 30, b = 40;
 function varA (num1){
    return num1 + num1;
 }

 function varB(num2) {
    return num2 + num2;
 }

 function addVal(varA, varB){
    let sum = varA + varB;
    console.log(sum);
    
 }

addVal(varA(a), varB(b));