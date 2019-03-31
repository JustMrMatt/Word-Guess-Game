//Globals
// --------------------------------------------------------
var words = ["Hodor", "Hodor Hodor", "Hodor Hodor Hodor", "Hold The Door"];
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
    selectedWord = words[Math.floor(Math.random() * words.length)];
    lettersInWord = selectedWord.split("");
    numBlanks = lettersInWord.length;

    remainingGuesses = 8;
    incorrectLetters = [];
    blanksAndCorrect = [];

    for (var i = 0; i < numBlanks; i++) {
        blanksAndCorrect.push("_");
    }

    document.getElementById("wordToGuess").innerHTML = blanksAndCorrect.join(" ");
    document.getElementById("numGuesses").innerHTML = remainingGuesses;
    document.getElementById("winCounter").innerHTML = wins;
    document.getElementById("lossCounter").innerHTML = losses;



    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(blanksAndCorrect);
}


//Main Process
// --------------------------------------------------------
startGame();

document.onkeyup = function(event) {
    var lettersGuessed = String.fromCharCode(event.keyCode).toLowerCase();
}