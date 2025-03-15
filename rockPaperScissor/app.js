const startGameBtn = document.getElementById('start-game-btn');

// This is function decleration

// function startGame() {
//     console.log('Game is starting...');
// }

// This is what we called is function expression in JavaScript

// const start = function startGame() {
//     console.log('Game is starting...');
// }


const person = {
    name:'sachin',
    greet: function greet() {
        console.log("hello there!");
    }
};

person.greet();


// console.log(typeof startGame);
// console.dir(startGame);
// startGameBtn.addEventListener('click', startGame);
// startGameBtn.addEventListener('click', start);
startGameBtn.addEventListener('click', function() {
    console.log("Game is starting...");
});