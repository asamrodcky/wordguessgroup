var words = ["cat", "dog", "bear", "microsope", "lion", "tiger"];
var guessingWord = words[Math.floor(Math.random() * words.length)];
var wins = 0;
var losses = 0;
var guessesLeft = 6;
var spaces = new Array(guessingWord.length).fill("_");
var userGuess = "";
var usedLetters = [];


function reset(){
    guessingWord = words[Math.floor(Math.random() * words.length)];
    guessesLeft = 6;
    var spaces = new Array(guessingWord.length).fill("_");
    usedLetters = [];
    $("#spaces").text(spaces.join(" "));
    usedLetters = [];
    $("#used-letters").text(usedLetters);
    console.log(guessingWord)
}


console.log(guessingWord);
$("#spaces").text(spaces.join(" "));

// reads user input for guess
document.onkeyup = function (event) {
    space = spaces.join(" ")
    userGuess = event.key.toLowerCase();

    if (usedLetters.indexOf(userGuess) === -1) {
        usedLetters.push(userGuess);
        $("#used-letters").text(usedLetters);
        guessesLeft--;
        $("#guesses-left").text(guessesLeft);
            if(guessesLeft === 0){
                alert("You lost.  Idiot");
                losses++;
                reset();
            }
    }
    else{
        alert("You already used that letter!")
    }
    
    // cycle through guessingWord and check for a match
    if (guessingWord.indexOf(userGuess) !== -1) {
        for (var i = 0; i < guessingWord.length; i++) {
            if (guessingWord[i] === userGuess) {
                spaces[i] = userGuess;
                $("#spaces").text(spaces.join(" "));
                    if(spaces === guessingWord){
                        alert("YOU WIN!")
                        win++
                        $("#win").text("Wins: "+win)
                    }
            }
        }
    }

}