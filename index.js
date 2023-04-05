function onStartButtonClick() {
  document.getElementById("menu").classList.add("hidden");

  document.getElementById("game").classList.remove("hidden");
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
