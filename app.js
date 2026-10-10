console.log("JAVA SCRIPT CONNECTED");
     let secretNumber = Math.floor(Math.random() * 10) + 1;

        let userGuess = prompt("Guess a number between 1 and 10:");

        let userNumber = parseInt(userGuess);

        if (userNumber === secretNumber) {
            alert(" Correct! You won!");
        } else {
            alert(" Wrong guess! The correct number was " + secretNumber + ".");
        }