// -------------->Global Variables---------------------->
newGame;

//----------------->Query Selectors--------------------->
var mainContainer = document.querySelector(".main-container")
var humanScore = document.querySelector('.human-score')
var changeGameButton = document.querySelector(".change-game-button")
var chooseGameHeading = document.querySelector(".choose-game")
var gameMessageHeader = document.querySelector(".game-message")
var classicFighterImgs = document.querySelector(".fighters-section")
var difficultFighterImgs = document.querySelector(".difficult-fighters")
var resultBox =document.querySelector(".result-box")
var classicGame = document.querySelector(".game-1")
var difficultGame = document.querySelector(".game-2")
var gameBoxes = document.querySelector(".game-boxes")
var computerScore = document.querySelector('.computer-score')


//---------------->Event Listeners---------------------->

window.addEventListener('load', newGame);
classicGame.addEventListener('click', pickClassicGame);
difficultGame.addEventListener('click', pickDifficultGame);
changeGameButton.addEventListener('click', changeGame);


//----------------->Event Handlers------------------------>
function newGame() {
  newGame = new Game();
};

function newPlayer() {
  newPlayer = new Player();
}

function updateWinnerMessage() {
  if (game.winner === game.human) {
    gameMessageHeader.innerText = `You Win!`
  } else if (game.winner === game.computer) {
    gameMessageHeader.innerText = `Computer Wins!`
  } else {
    gameMessageHeader.innerText = `It's a Draw!`
  }
}

function pickClassicGame() {
 hide(chooseGameHeading);
 hide(classicGame);
 hide(difficultGame);
 show(gameMessageHeader);
 show(changeGameButton);
 show(classicFighterImgs);
 newGame.chooseClassic();
}

function pickDifficultGame() {
  hide(chooseGameHeading);
  hide(classicGame);
  hide(difficultGame);
  show(gameMessageHeader);
  show(changeGameButton);
  show(difficultFighterImgs);
  newGame.chooseDifficult();
}

function changeGame() {
  show(chooseGameHeading);
  show(classicGame);
  show(difficultGame);
  hide(gameMessageHeader);
  hide(changeGameButton);
  hide(classicFighterImgs);
  hide(difficultFighterImgs);
}

function pickFighter(fighter) {
  var fighters = fighter
  newGame.human.turn = fighter
  beginGame()
  console.log(fighter);
}

function playRPS() {
  hide(classicFighterImgs);
  hide(difficultFighterImgs);
  hide(gameBoxes);
  hide(changeGameButton);
  show(resultBox);
  resultBox.innerHTML = `<img src="./assets/${newGame.human.turn}.jpg">
  <img src="./assets/${newGame.computer.turn}.jpg"`
updateWinnerMessage()
};

function beginGame() {
  newGame.computer.takeTurn();
  newGame.playGame();
  newGame.addtoScores();
  playRPS()
  setTimeout(pickClassicGame, 2000);
}

//---------------->Misc Functions----------------------->
function show(element) {
  element.classList.remove("hidden");
};

function hide(element) {
  element.classList.add("hidden");
};
