function multiply(a, b = 1){
    return a * b;
}

console.log(multiply(5,2));

console.log(multiply(5));

console.log(multiply(5, undefined));
console.log(multiply(5, null));
console.log(multiply(5, NaN));

function f(x = 1, y) {
    return [x, y];
}

console.log(f());
console.log(f(2));


function test(num = 1) {
    console.log(typeof num);
}

// test();
// test(undefined);

test("");
test(null);

function append(value, array = []) {
    array.push(value);
    return array;
}

console.log(append(1));
console.log(append(2));


const arr = [];
function append1(value) {
    arr.push(value);
    return arr;
}

console.log(append1(1));
console.log(append1(2));

// Number of times called

function callSomething( thing = something()) {
    return thing;
}

let numberOfTimeCalled = 0;
function something() {
    numberOfTimeCalled += 1;
    return numberOfTimeCalled;
}

console.log(callSomething());
console.log(callSomething());

function greet(name, greeting, message = `${greeting} ${name}`){
    return [name, greeting, message];
}

console.log(greet("Sachin", "Hi"));
console.log(greet("Sachin", "Hi", "Happy Birthday!"));



function preFilledArray([x = 1, y = 2] = []){
    return x + y;
}

console.log(preFilledArray());
console.log(preFilledArray([]));
console.log(preFilledArray([2]));
console.log(preFilledArray([2, 4]));

function preFilledObject({z = 3} = {}){
    return z;
}

console.log(preFilledObject());
console.log(preFilledObject({}));
console.log(preFilledObject({z:2}));