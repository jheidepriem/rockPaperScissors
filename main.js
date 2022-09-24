// -------------->Global Variables---------------------->

var game = new Game();

//----------------->Query Selectors--------------------->

var classicGame = document.querySelector(".game-1")
var difficultGame = document.querySelector(".game-2")
var changeGameButton = document.querySelector(".change-game-button")
var humanScore = document.querySelector('.human-score')
var computerScore = document.querySelector('.computer-score')
var gameMessage = document.querySelector('.game-message')
var fighterSection = document.querySelector('fighter-section')


//---------------->Event Listeners---------------------->

window.addEventListener('load', onPageLoad);
classicGame.addEventListener('click', pickClassicGame);
difficultGame.addEventListener('click', pickDifficultGame);
changeGameButton.addEventListener('click', changeGame);



//----------------->Dom Handlers------------------------>

function updateMessage() {
  if(game.isADraw === true) {
    gameMessage.innerText = `It's a draw!`
  }
}

function updateWinnerMessage() {
  if (game.winner === game.human) {
    gameMessage.innerText = `You Win!`
  } else if (game.winner === game.computer) {
    gameMessage.innerText = `Computer Wins!`
  }
}

function resetFighters() {
 if ()
 setTimeout()
}


function updateHumanScore(){
 if () {
 }
}

function updateComputerScore() {

}

function pickClassicGame() {
 hide(gameContainer);
 hide(difficult);
 show(changeGmBtn);
 show(resultContainer);
 newGame.chooseClass();
 pageIntro.innerText = "Choose Your Fighter!"

  changePage()
}

function pickDifficultGame() {
  changePage()
}


function onPageLoad() {

}

//---------------->Data Handlers----------------------->


function pickFighter(fighter) {
  this.fighter = fighter
  console.log(fighter);
}

function getScore() {

}

function getComputerFighter() {
  this.player2Fighter = getRandomRps()
}


//---------------->Misc Functions----------------------->

function getRandomRps(array) {
  return Math.floor(Math.random() * array.length)

}
