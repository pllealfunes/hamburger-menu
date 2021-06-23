# Hangman Game 🕹

A hangman game to practice Vue 3. The user will play against the computer. The computer picks a random word from an array and the user will have to guess the word. If the user guesses wrong 6 times then the player will lose the game. The player will be able to see a list of guesses already made. They will also be able to see a round history showing the player's score and the computer's score.

## Requirements 💫
* Keep track of a) a running score and b) results of each round of the game played ✔️
* Provide the option to reset the score and results ✔️
* Use at least 1 component ✔️
* There should be some aspect of dynamic styling (e.g. winning message in green, losing message in red) and this should be accomplished using class binding. ✔️
* There must not be any warnings or errors in the inspector console


## To Do 📌
* Array of words & hints
    * Theme -> words from crossword puzzle in newspaper ✔️
    * Show hints ✔️
* Get random word with hint ✔️
* Have underscores equal the amount of letters in word ✔️
* When a letter is guessed right replace underscore with letter ✔️
* Guess wrong letter player gets a strike
    * show strike count ✔️
    * 6 wrong guesses -> lose game ✔️
    * Show message ✔️
* Keep track of guesses
    * display on page ✔️
    * check for capital or lowercase ✔️
    * check for repeats ✔️
* Play again button after win or lose ✔️
* Add stylling!
* Netlify
