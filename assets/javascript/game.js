//Globals
// --------------------------------------------------------
var words = ["Hodor", "Hodor Hodor", "Hodor Hodor Hodor", "Hold The Door"];
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndCorrect = [];
var incorrectLetters = [];


var wins = 0;
var losses = 0;
var remainingGuesses = 8;


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

var isLetterInWord = false;

function checkLetters(letter){
    
    for (var i = 0; i < numBlanks; i++) {
        if(selectedWord[i] == letter) {
            isLetterInWord = true;
        }
    }
}
    if (isLetterInWord) {
        for (var i = 0; i < numBlanks; i++) {
            if(selectedWord[i] == letter) {
                blanksAndCorrect[i] = letter;
            } 
        }
    }
    else {
        incorrectLetters.push("letter");
        remainingGuesses--;
    }

function roundComplete() {
    console.log("Win Count: " + wins + " | Loss Count: " + losses + " | Guesses Left: " + remainingGuesses);

document.getElementById("numGuesses").innerHTML = remainingGuesses;
document.getElementById("wordToGuess").innerHTML = blanksAndCorrect.join(" ");
document.getElementById("wrongGuesses").innerHTML = incorrectLetters.join(" ");

    if (lettersInWord.toString() == blanksAndCorrect.toString()) {
        wins++
        alert("You Win!");

        document.getElementById("winCounter").innerHTML = wins;

        startGame();
    }

    else if (remainingGuesses = 0) {
        losses++;
        alert("You Lost!");

        document.getElementById("lossCounter").innerHTML = losses;

        startGame();
    }
}
  
//Main Process
// --------------------------------------------------------
startGame();

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();

    console.log(letterGuessed);
}
