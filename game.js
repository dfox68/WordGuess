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

    console.log(selectedWord);
}

//Main Process
//=========================================================================
startGame();