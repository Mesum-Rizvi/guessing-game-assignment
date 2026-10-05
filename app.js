console.log("JAVA SCRIPT CONNECTED");


let target = 5;

let userGuess = prompt("Guess the number between 1 and 10:");

userGuess = Number(userGuess);

if (userGuess === target) {
    alert("Congratulations! You guessed the correct number.");
}
else if (userGuess < target) {
    alert("Too low! Try again.");
}
else {
    alert("Too high! Try again.");
}

// Play Again
let playAgain = confirm("Do you want to play again?");

if (playAgain) {
    location.reload();
}
else {
    alert("Thanks for playing!");
}