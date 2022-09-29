// Before the game start
// - Listen for any keyboard action
// - Start thegame

// After the game start
// - Jump dino when a space key is pressed
// - Listen for the collision between dino and cactus
// - If there is a collision, make the game end
// - If there is no collision, update the score and generate obstacles

// Game ends (Game over)

const rootElem = document.querySelector(":root");
const gameElem = document.querySelector("#game");
const dinoElem = gameElem.querySelector(".dino");
const scoreElem = gameElem.querySelector(".score");
const groundElem = gameElem.querySelector(".ground");
const cactusElem = groundElem.querySelector(".cactus");
const selfPlayElem = document.querySelector("#selfplay");

let gameID;
let gameSpeed = 4000;
let jumpSpeed = (gameSpeed / 10) * 2;
let maxJump = 250;
let speedScale = 1;

let gameStart = false;
let gameOver = false;
let score = 0;

let selfPlayMode = false;
let jumping = false;

function fitScreen() {
  let width = window.innerWidth;
  let height = window.innerHeight / 2;
  gameElem.style.width = width + "px";
  gameElem.style.height = height + "px";
  gameElem.style.zoom = 1.5;
}

function setCustomProperty(elem, prop, val) {
  elem.style.setProperty(prop, val);
}

function shouldJump() {
  let minGap = 250;
  let cactusXPos = cactusElem.getBoundingClientRect().x;

  //Validate jump
  if (cactusXPos <= 0 || jumping) return false;
  if (cactusXPos < minGap) {
    return true;
  }
  return false;
}

function startGame() {
  gameStart = true;
  gameElem.classList.add("game-start");
  document.addEventListener("keydown", handleJump);
  //   gameID = setInterval(() => {
  //     updateGame();
  //   }, 100);
  window.requestAnimationFrame(updateGame);
}

function handleJump(e) {
  if (e.code !== "Space") return;
  let audio = document.querySelector(".audio-jump");
  audio.play();
  dinoElem.classList.add("jump");
  jumping = true;
  dinoElem.addEventListener("animationend", function () {
    dinoElem.classList.remove("jump");
    jumping = false;
  });
}

// As long as the game is running, this function is called
function updateGame() {
  setCustomProperty(rootElem, "--game-speed", gameSpeed);
  setCustomProperty(rootElem, "--jump-speed", jumpSpeed);
  setCustomProperty(rootElem, "--max-jump", maxJump);
  setCustomProperty(rootElem, "--speed-scale", speedScale);
  if (selfPlayMode) {
    if (shouldJump()) {
      handleJump({ code: "Space" });
    }
  }
  // Update the score
  updateScore();
  // Update the cactus
  updateCactus();
  // Check if game over
  if (checkGameOver()) {
    endGame();
    return;
  }
  window.requestAnimationFrame(updateGame);
}

let scoreInterval = 10;
let currentScoreInterval = 0;

function updateScore() {
  currentScoreInterval += 1;
  if (currentScoreInterval % scoreInterval !== 0) return;
  score += 1;

  if (score === 0) return;
  if (score % 100 === 0) {
    let audio = document.querySelector(".audio-point");
    audio.play();
    gameSpeed -= speedScale;
    jumpSpeed = (gameSpeed / 10) * 2;
  }
  let currentScoreElem = scoreElem.querySelector(".current-score");
  currentScoreElem.innerHTML = score.toString().padStart(5, "0");
}

function updateCactus() {
  let cactusXPos = cactusElem.getBoundingClientRect().x;
  let isOffScreen = cactusXPos > window.innerWidth;
  if (isOffScreen === false) return;

  let cacti = ["cactus-small-1", "cactus-small-2", "cactus-small-3"];
  let randNum = Math.floor(Math.random() * cacti.length);
  let cactus = cacti[randNum];
  cactusElem.classList.remove(
    "cactus-small-1",
    "cactus-small-2",
    "cactus-small-3"
  );
  cactusElem.classList.add(cactus);
}

function isCollision(dinoRect, cactusRect) {
  // AABB - Axis-aligned bounding box
  return (
    dinoRect.x < cactusRect.x + cactusRect.width &&
    dinoRect.x + dinoRect.width > cactusRect.x &&
    dinoRect.y < cactusRect.y + cactusRect.height &&
    dinoRect.y + dinoRect.height > cactusRect.y
  );
}

function checkGameOver() {
  if (gameOver) return true;
  let dinoRect = dinoElem.getBoundingClientRect();
  let cactusRect = cactusElem.getBoundingClientRect();
  if (isCollision(dinoRect, cactusRect)) {
    return true;
  }
  return false;
}

function endGame() {
  let audio = document.querySelector(".audio-die");
  audio.play();
  gameOver = true;
  gameElem.classList.add("game-over");
  document.removeEventListener("keydown", handleJump);
  clearInterval(gameID);
}

window.addEventListener("load", function () {
  fitScreen();
  window.addEventListener("resize", fitScreen);
  selfPlayElem.addEventListener("change", function () {
    selfPlayMode = selfPlayElem.checked;
  });
  document.addEventListener("keydown", startGame, { once: true });
});
