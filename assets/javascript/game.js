//Globals
// --------------------------------------------------------
var words = ["Hodor Hodor", "Hodor", "Hodor Hodor", "Hodor", "Hodor Hodor Hodor", "Hodor", "Hodor"];
var selectedWord = "";
var LettersInWord = [];
var numBlanks = 0;
var blanksAndCorrect = [];
var incorrectLetters = [];
var wins = 0;
var losses = 0;
var remainingGuesses = 9;


//Functions
// --------------------------------------------------------
function startGame() {
    selectedWord = words[Math.floor(Math.random() = words.length)];
    lettersInWord = selectedWord.split("");
    numBlanks = lettersInWord.length;

    remainingGuesses = 9;
    incorrectLetters = [];
    blanksAndCorrect = [];

    

    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(numBlanks);
}


//Main Process
// --------------------------------------------------------
startGame();