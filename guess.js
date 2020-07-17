// Define variables: words, word to guess, wrong guesses, guesses left, wins and losses
var words = ["daniel", "frank", "james", "michael"]
var wins = 0
var losses = 0
var wordToGuess = "_ _ _ "
var allGuesses = []
var wrongGuesses = []
var guessesLeft = 9
var roundOver = false

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

function formatWordToGuess() {
  var wordArray = wordToGuess.split("")
  var tmpWord = ""
  var lettersCorrect = 0
  // use word to guess and letters guess to update tmpWord
  // Go through each letter in the word to guess. If guessed then show letter, if not show _ both
  //  followed by a space
  for (var i = 0; i < wordArray.length; i++) {
    if (allGuesses.includes(wordArray[i])) {
      tmpWord += wordArray[i] + " "
      // Increase numLettersCorrect once each time
      lettersCorrect++
    } else {
      tmpWord += "_ "
    }
  }
  // Check letters correct = length of word guess === winner
  if (lettersCorrect === wordArray.length) {
    wins++
    roundOver = true
    alert("winner")
  }

  return tmpWord
}

function updateDisplay() {
  // resetRound if roundOver === true
  if (roundOver) {
    resetRound()
  }
  var formattedWord = formatWordToGuess()
  // need to format the wordToGuess before displaying it
  console.log("Word So Far", formattedWord)
  console.log("Wins: " + wins)
  console.log("Losses: " + losses)
  console.log("Guesses Remaining: " + guessesLeft)
  console.log("Incorrect Letters: ", wrongGuesses)
  $("#wins").text(wins)
  $("#losses").text(losses)
  $("#word").text(formattedWord)
  $("#guesses").text(guessesLeft)
  $("#bad-letters").text(wrongGuesses)

  // <p>Wins: <span id="wins">0</span></p>
  // <p>Losses: <span id="losses">0</span></p>
  // <p>Word to Guess: <span id="word"></span></p>
  // <p>Guesses left: <span id="guesses">0</span></p>
  // <p>Incorrect letters: <span id="bad-letters">0</span></p>
}

function resetRound() {
  pickWordToGuess()
  allGuesses = []
  wrongGuesses = []
  guessesLeft = 9
  roundOver = false
  console.log("Press any key to get started!")
}

function checkLetter(letter) {
  var wordArray = wordToGuess.split("")
  // console.log("checkLetter -> wordArray", wordArray)

  // See if letter is in word to Guess otherwise guessesLeft-- if wrong
  console.log("Letter to check", letter)
  if (wordArray.includes(letter)) {
    // process word to guess
  } else {
    console.log("Incorrect letter")
    guessesLeft--
    if (guessesLeft < 1) {
      losses++
      roundOver = true
      alert("Out of guesses")
    }
    wrongGuesses.push(letter)
  }
}

// Define event listeners: listen for a key press,

document.onkeyup = function (event) {
  var keyPressed = event.key
  if (roundOver) {
    resetRound()
  }
  console.log(keyPressed)
  // Do some logic
  if (allGuesses.includes(keyPressed)) {
    console.log("You have already selected " + keyPressed)
  } else {
    allGuesses.push(keyPressed)
    checkLetter(keyPressed)
    // Update the display
    updateDisplay()
  }
}

// Call functions, do logic
startGame()
