var wins = 0; 
var guessesRemaining = 10;
var alreadyGuessed = [];
var currentWord;
var currentChosenPokemon = [];
var currentChosenDisplay = [];
var pokemonArray = ["pikachu", "meowth", "togepi", "houndoom", "mudkip", "skitty", "lucario", "combee", "stoutland", "krookodile", "litleo", "dedenne", "silvally", "stufful"];


//Computer generates new random pokemon at beginning of game 
if(guessesRemaining == 10) {
    
    var chosenPokemon = pokemonArray[Math.floor(Math.random() * pokemonArray.length)]; 
    currentChosenPokemon.splice(0, 1, chosenPokemon);
    currentChosenPokemon.length;
}

//Prints underscores to the browser display equal to length of chosen pokemon

if(guessesRemaining == 10) {
    
        for(var i = 0; i < currentChosenPokemon[0].length; i++) {
            currentChosenDisplay.push("_");
            var properDisplayWord = currentChosenDisplay.join(" ");
            document.getElementById("current-word").innerText = properDisplayWord;        
      }
    
    }

console.log("The pokemon the computer chose: " + currentChosenPokemon + " " + "length: " + currentChosenPokemon[0].length);
console.log("Should show blank spaces" + currentChosenDisplay + " " + "length: " + currentChosenDisplay.length);

//START USER INPUT FUNCTION

document.onkeyup = function (event) {
    var userChoice = event.key;

//Prints the letters that the user already guessed to the browser display.

    if(guessesRemaining > 0){
    
    alreadyGuessed.push(" " + userChoice + " ");
    var properDisplay = alreadyGuessed.join(" ");
    document.getElementById("already-guessed").innerText = properDisplay;
    } 

    if(){
        
    }


} /*End Master Function*/


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