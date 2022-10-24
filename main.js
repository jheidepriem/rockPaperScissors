// // -------------->Global Variables---------------------->
newGame;
newPlayer;

//----------------->Query Selectors--------------------->
var mainContainer = document.querySelector(".main-container")
var humanScore = document.querySelector('.human-score')
var computerScore = document.querySelector('.computer-score')
var changeGameButton = document.querySelector(".change-game-button")
var chooseGameHeading = document.querySelector(".choose-game")
var gameMessageHeader = document.querySelector(".game-message")
var classicFighterImgs = document.querySelector(".fighters-section")
var difficultFighterImgs = document.querySelector(".difficult-fighters")
var resultBox = document.querySelector(".result-box")
var fighterBox = document.querySelector(".fighter-box")
var classicGame = document.querySelector(".game-1")
var difficultGame = document.querySelector(".game-2")
var gameBoxes = document.querySelector(".game-boxes")

//---------------->Event Listeners---------------------->

window.addEventListener('load', newGame);
classicGame.addEventListener('click', pickClassicGame);
difficultGame.addEventListener('click', pickDifficultGame);
changeGameButton.addEventListener('click', changeGame);
fighterBox.addEventListener('click', pickFighter)

//----------------->Event Handlers------------------------>

function newGame() {
  newGame = new Game();
};

function newPlayer() {
  newPlayer = new Player();
};

function pickClassicGame() {
 hide(chooseGameHeading);
 hide(classicGame);
 hide(difficultGame);
 show(gameMessageHeader);
 show(changeGameButton);
 show(classicFighterImgs);
 newGame.chooseClassic();
};

function pickDifficultGame() {
  hide(chooseGameHeading);
  hide(classicGame);
  hide(difficultGame);
  show(gameMessageHeader);
  show(changeGameButton);
  show(difficultFighterImgs);
  newGame.chooseDifficult();
};

function changeGame() {
  show(chooseGameHeading);
  show(classicGame);
  show(difficultGame);
  show(gameBoxes)
  hide(gameMessageHeader);
  hide(resultBox)
  hide(changeGameButton);
  hide(classicFighterImgs);
  hide(difficultFighterImgs);
};

function updateWinnerMessage() {
  if (newGame.winner === newGame.human) {
    gameMessageHeader.innerText = `You Win!`
  } else if (newGame.winner === newGame.computer) {
    gameMessageHeader.innerText = `Computer Wins!`
  } else {
    gameMessageHeader.innerText = `It's a Draw!`
  }
  humanScore.innerText = `Wins: ${newGame.human.wins}`
  computerScore.innerText = `Wins: ${newGame.computer.wins}`
};

function pickFighter(event) {
  newGame.human.turn = event.target.id;
  beginGame();
  console.log("hello there!")
};

function resetGame() {
  hide(fighterBox);
  show(resultBox);
  show(changeGameButton);
  show(gameMessageHeader)
  resultBox.innerHTML = ``;
};

function playRPS() {
  hide(resultBox);
  hide(gameBoxes);
  show(fighterBox);
  hide(changeGameButton);
  resultBox.innerHTML = `<img src="./assets/${newGame.human.turn}.jpg" id="${newGame.human.turn}"
  <img src="./assets/${newGame.computer.turn}.jpg" id="${newGame.computer.turn}">`
  updateWinnerMessage()
};

function beginGame() {
  newGame.computer.takeTurn();
  newGame.playGame();
  newGame.addToScores();
  playRPS()
  setTimeout(resetGame, 1500);
};

//---------------->Misc Functions----------------------->

function show(element) {
  element.classList.remove("hidden");
};

function hide(element) {
  element.classList.add("hidden");
};
