let score;
let gameTime;
let gameInterval;

function resetGameStats() {
  score = 0;
  gameTime = 10;
  clearInterval(gameInterval);
  startTimer();
}

// to hide menu and open game
function onStartButtonClick() {
  document.getElementById("menu").classList.add("hidden");

  document.getElementById("game").classList.remove("hidden");
  randomizeTitle();
  resetGameStats();
}

document.getElementById("play-button").onclick = onStartButtonClick;

// to hide game-over and open game
function onPlayAgainButtonClick() {
  document.getElementById("game-over").classList.add("hidden");

  document.getElementById("game").classList.remove("hidden");
  randomizeTitle();
  resetGameStats();
}
document.getElementById("play-again-button").onclick = onPlayAgainButtonClick;

// to hide game-won and open menu
function backToHomeButtonClick() {
  document.getElementById("game-won").classList.add("hidden");

  document.getElementById("menu").classList.remove("hidden");
}

document.getElementById("back-home-button").onclick = backToHomeButtonClick;

function toWonPage() {
  document.getElementById("game").classList.add("hidden");

  document.getElementById("game-won").classList.remove("hidden");
  displayWonScore();
}

// const element = document.getElementById("back-home-button")
// element.addEventListener("click", backToHomeButtonClick);

//array of colors
const colors = ["red", "green", "blue", "pink", "yellow", "purple"];

// function randomizes text and color
function randomizeTitle() {
  let chosen_index = getRandomInt(colors.length);
  const chosenColor = colors[chosen_index];

  chosen_index = getRandomInt(colors.length);
  const chosenText = colors[chosen_index];
  const htmlElement = document.getElementById("random-word");

  // the 2 lines change the text and color of the HTML element to 2 specific values
  htmlElement.style.color = chosenColor;
  htmlElement.innerHTML = chosenText;
}

// returns a random number and round it down
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// looks at the color of the prompt and at the text value of the button pressed and checks if they're the same
function onAnswerClick(event) {
  const expectedColor = document.getElementById("random-word").style.color;
  const buttonString = event.target.innerHTML;

  if (expectedColor == buttonString) {
    score++;
    randomizeTitle();
  } else {
    document.getElementById("game").classList.add("hidden");

    document.getElementById("game-over").classList.remove("hidden");
    displayLostScore();
    clearInterval(gameInterval);
  }
}
// register the onclick function for all 6 buttons
const elements = document.querySelectorAll(".buttons");
elements.forEach((element) => {
  element.onclick = onAnswerClick;
});

function displayWonScore() {
  document.getElementById("final-won-score").innerHTML =
    "YOUR FINAL SCORE IS: " + score;
}

function displayLostScore() {
  document.getElementById("final-lost-score").innerHTML =
    "YOUR FINAL SCORE IS: " + score;
}
function startTimer() {
  document.getElementById("timer").innerHTML = gameTime;
  gameInterval = setInterval(changeTimer, 1000);
}
function changeTimer() {
  gameTime--;
  document.getElementById("timer").innerHTML = gameTime;
  if (gameTime === 0) {
    toWonPage();
  }
}
