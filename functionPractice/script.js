/*
function greet(name) {
    return `Hello, ${name}`;
}

console.log(greet("sachin"));
*/

/*
const greet = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet('sachin'));
*/

/*
const greet = (myName) => {
    return `Hello, ${myName}!`;
};
console.log(greet('sachin'));
*/

// const greet = myName => `Hello, ${myName}!`;

// console.log(greet('sharma'));

/*
const obj = {
    name: 'sachin',
    regularFunction: function() {
        console.log(this.name);
    },
    arrowFunction: () => {
        console.log(this.name);
    }
};

obj.regularFunction();
obj.arrowFunction();
*/

// (IIFE) Immediately Invoked Function Expressions

(function() {
    const secret = 'I am an IIFE';
    console.log(secret);
})();


// another example
const counter = (function() {
    let count = 0;
    return{
        increment: function() {
            count++;
        },
        decrement: function() {
            count--;
        },
        getCount: function() {
            return count;
        }
    };
})();

counter.increment();
counter.increment();
console.log(counter.getCount());
counter.decrement();
console.log(counter.getCount());

// Generator Functions: Yieldig Results

function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numberGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);


