const keyboardDiv = document.querySelector("#keyboard");
const mistakesElem = document.querySelector("#mistakes");
const maxWrongElem = document.querySelector("#maxWrong");
const pictureElem = document.querySelector("#hangmanPic");
const wordSpotlightElem = document.querySelector("#wordSpotlight");

const programming_languages = [
  "python",
  "javascript",
  "mongodb",
  "json",
  "java",
  "html",
  "css",
  "c",
  "csharp",
  "golang",
  "kotlin",
  "php",
  "sql",
  "ruby",
  "swift",
  "go",
  "typescript",
  "scala",
  "rust",
];

let answer = "";
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord() {
  answer =
    programming_languages[
      Math.floor(Math.random() * programming_languages.length)
    ];
}

function generateButtons() {
  let buttonsHTML = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map(
      (letter) =>
        `
    <button 
        class="btn btn-lg btn-primary m-2" 
        id="${letter}" 
        onclick="handleGuess('${letter}')">
        ${letter}
    </button>
    `
    )
    .join("");
  keyboardDiv.innerHTML = buttonsHTML;
}

function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;

  document.getElementById(chosenLetter).setAttribute("disabled", true);
  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
    checkGameLost();
    updateHangmanPic();
  }
}

function checkGameLost() {
  if (mistakes === maxWrong) {
    wordSpotlightElem.innerHTML = `The answer was ${answer}.`;
    keyboardDiv.innerHTML = "You lost !!!";
  }
}

function checkGameWon() {
  if (wordStatus === answer) {
    keyboardDiv.innerHTML = "You won !!!";
  }
}

function guessedWord() {
  wordStatus = answer
    .split("")
    .map((letter) => (guessed.indexOf(letter) >= 0 ? letter : " _ "))
    .join("");

  wordSpotlightElem.innerHTML = wordStatus;
}

function updateMistakes() {
  mistakesElem.innerHTML = mistakes;
}

function updateHangmanPic() {
  pictureElem.src = `./images/${mistakes}.jpg`;
}

function reset() {
  mistakes = 0;
  guessed = [];
  pictureElem.src = "./images/0.jpg";

  randomWord();
  guessedWord();
  updateMistakes();
  generateButtons();
}

maxWrongElem.innerHTML = maxWrong;

randomWord();
generateButtons();
guessedWord();
