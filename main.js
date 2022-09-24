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
var classicGame = document.querySelector(".game-1")
var difficultGame = document.querySelector(".game-2")
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

function show(element) {
  element.classList.remove("hidden");
};

function hide(element) {
  element.classList.add("hidden");
};

function pickFighter(fighter) {
  var fighters = fighter
  console.log(fighter);
}

//---------------->Event Handlers----------------------->







//---------------->Misc Functions----------------------->
