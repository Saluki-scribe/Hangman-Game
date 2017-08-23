var wins = 0; 
var guessesRemaining = 10;
var alreadyGuessed = [];
var currentWord;

//Take in keyboard input and print to browser
document.onkeyup = function hangmanGame (event) {
    var userChoice = event.key;
    alreadyGuessed.push(" " + userChoice + " ");
    var properDisplay = alreadyGuessed.join(" ");
    document.getElementById("already-guessed").innerText = properDisplay;
}

function wordChoice () {
    var pokemon = ["pikachu", "meowth", "togepi", "houndoom", "mudkip", "skitty", ];

}

//IF letter is part of alreadyGuessed, don't do anything. Set as parameter for first part.












/*

Theme: Pokemon 

1. Make a basic display of required words and counters.

2. Make key events that respond to letters that user types

3. Make a display that will type out letters on the page AND store letters typed in "alreadyGuessed array"

3. Make counters for wins

4. IF the user guesses a correct letter, reveal that letter

5. Make underscores equal to the amount of letters in the given word.

6. Create a list of words the user can guess from, and have computer generate one randomly each time guesses remaining == 13

7. After the user wins/loses, the game should automatically choose another word and make user play it


*/