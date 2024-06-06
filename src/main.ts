// create buttons with letters of the alphabet
const alphabet: string = "abcdefghijklmnopqrstuvwxyz";

const alphabetDiv = document.getElementById('alphabet');

// iterate over alphabet and create letter buttons
for (let letter of alphabet) {
  createLetterButton(letter);
}

// function to create buttons with alphabet-letters
function createLetterButton(letter: string) {
  // create new button
  let newLetter = document.createElement('div');
  newLetter.innerHTML = `<button
  type="button"
  class="letter btn btn-primary"
  id=${letter}>${letter}</button>`;
  // append to alphabetDiv
  alphabetDiv?.appendChild(newLetter);
}

// array of possible words
const wordlist = ["devhaus", "programming", "developer", "lunchbreak", "office"];
let word: string;
let hiddenWord: string;

// function to start game
function startGame() {
  // choose a random word from wordlist
  word = wordlist[Math.floor(Math.random() * wordlist.length)];
  
  encryptWord();
}

function encryptWord() {
  // access div with id 'word'
  const wordDiv = document.getElementById('word');

  hiddenWord = word.split('').map(_ => {
    return '_'
  }).join(' ');
  // show word inside of word div
  wordDiv!.innerHTML = `${hiddenWord}`;
}

startGame();