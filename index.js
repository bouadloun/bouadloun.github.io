function onStartButtonClick() {
  document.getElementById("menu").classList.add("hidden");

  document.getElementById("game").classList.remove("hidden");
  startRound();
}

document.getElementById("play-button").onclick = onStartButtonClick;

function onPlayAgainButtonClick() {
  document.getElementById("game-over").classList.add("hidden");

  document.getElementById("game").classList.remove("hidden");
}
document.getElementById("play-again-button").onclick = onPlayAgainButtonClick;

function backToHomeButtonClick() {
  document.getElementById("game-won").classList.add("hidden");

  document.getElementById("menu").classList.remove("hidden");
}

document.getElementById("back-home-button").onclick = backToHomeButtonClick;

// const element = document.getElementById("back-home-button")
// element.addEventListener("click", backToHomeButtonClick);

const colors = ["Red", "Green", "Blue", "Pink", "Yellow", "Purple"];

function startRound() {
  let chosen_index = getRandomInt(colors.length);
  const chosenColor = colors[chosen_index];

  chosen_index = getRandomInt(colors.length);
  const chosenText = colors[chosen_index];
  const htmlElement = document.getElementById("random-word");
  htmlElement.style.color = chosenColor;
  htmlElement.innerHTML = chosenText;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function onAnswerClick(event) {
  const expectedColor = document.getElementById("random-word").style.color;
  const buttonString = event.target.innerHTML;

  if (expectedColor === buttonString) {
    // console.log("you win");
  }
}
document.getElementsByClassName("buttons").onclick = onAnswerClick;
