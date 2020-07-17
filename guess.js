// Define variables: words, word to guess, wrong guesses, guesses left, wins and losses
var words = ["daniel", "frank", "james", "michael"]
var wins = 0
var losses = 0
var wordToGuess = "_ _ _ "
var wrongGuesses = []
var guessesLeft = 9

function pickWordToGuess() {
  wordToGuess = words[Math.floor(Math.random() * words.length)]
  console.log("Word To Guess: " + wordToGuess)
}

// Next up = update display for each letter guessed

// Define functions: start game, display the word (formatting), get word to guess, update display
function startGame() {
  console.log("Welcome to the guessing game")
  // Pick word to guess
  pickWordToGuess()
  // Update the display
}

function wordStuff() {
  // Word Entry:
  // If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
  // As the user guesses the correct letters, reveal them: m a d o _ _ a.
  // Number of Guesses Remaining: # of guesses remaining for the user.
  // Letters Already Guessed: Shows the hetters a user has already guessed, displayed like: L, Z, Y, H.
  // After the user wins or loses, the game should automatically choose another word from a pre-set list and revert back to the start screen: "Press any key to get started!"
}

// Define event listeners: listen for a key press,

document.onkeyup = function (event) {
  var keyPressed = event.key
  console.log(keyPressed)
}

// Call functions, do logic
startGame()
