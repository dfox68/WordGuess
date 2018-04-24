// Global Variables
//=========================================================================

//Arrays and variables for storing data
var wordOptions = ["header", "footer", "sidebar", "panel", "selector", "declaration"];

var selectedWord = "";

var lettersInWord = [];

var numBlanks = 0;

var blanksAndSuccesses = [];

var wrongLetters = [];

//Game Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

// Functions
//=========================================================================

function startGame () {
    //Chooses a random word to start the game
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersInWord = selectedWord.split("");
    numBlanks = lettersInWord.length;

    // Reset game
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    //Populate blank spaces and successes with the correct number of blanks
    for ( i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    //Update HTML to reflect current game conditions
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("  ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;

    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);

}

function checkLetters(letter) {
    //check if letter exists
    
    var isLetterInWord = false;

    for (i = 0; i < numBlanks; i++) {
        if(selectedWord[i] == letter) {
            isLetterInWord = true;
            
        }
    }

//Check where in the word the letter exists. Then populate the blanksAndSuccesses array
if(isLetterInWord) {
for (i = 0; i < numBlanks; i++ )
    if (selectedWord[i] == letter) {
        blanksAndSuccesses[i] = letter;
        }
    } 
    //letter not found
else {
    wrongLetters.push(letter);
    guessesLeft--;
}  

console.log(blanksAndSuccesses);
}

function roundComplete() {
    console.log("Win Count:" + winCount + " | Loss Count: " + lossCount + " | Guesses Left: " + guessesLeft);

    //Update HTML to reflect current count stats
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("  ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join("  ");

    //  Check if user won
    if (lettersInWord.toLocaleString() == blanksAndSuccesses.toLocaleString()) {
        winCount++;
        alert("You WON!!!!");

        // Update win counter in HTML
        document.getElementById("winCounter").innerHTML = winCount;

        startGame();
    }
    // Check if user lost
    else if (guessesLeft == 0){
    lossCount++;
    alert("You suck!!");

    //update loss counter in the HTML
    document.getElementById("lossCounter").innerHTML = lossCount;

    startGame();
}
}

//Main Process
//=========================================================================
// kicks off game
startGame();

// captures user input
document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    checkLetters(letterGuessed);
    
    roundComplete();
    console.log(letterGuessed);
}