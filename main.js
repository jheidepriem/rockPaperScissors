// -------------->Global Variables---------------------->

var game = new Game();

//----------------->Query Selectors--------------------->

var classicGame = document.querySelector(".game-1")
var difficultGame = document.querySelector(".game-2")
var rockButton = document.querySelector(".rock-button")
var paperButton = document.querySelector(".paper-button")
var scissorsButton = document.querySelector(".scissors-button")
var dinoButton = document.querySelector(".dino-button")
var octoButton = document.querySelector(".octo-button")
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
  if (game.human.isAWin === true) {
    gameMessage.innerText = `You Win!`
  } else if (game.computer.isAWin === true) {
    gameMessage.innerText = `Computer Wins!`
  }
}

function resetFighters() {
 if (game.draw === true || game.isAWin === true)
 setTimeout()
}


function updateHumanScore(){
 if (game.human.isAWin === 1) {
 }
}

function updateComputerScore() {

}

function pickClassicGame() {
  changePage()
}

function pickDifficultGame() {
  changePage()
}

function changePage(show, hide) {
show.classList.remove('hidden')
hide.classList.add('hidden')
 }

function onPageLoad() {

}

//---------------->Data Handlers----------------------->

switchTurns() {
   if (this.turn === this.player1) {
     this.turn = this.player2;
   } else if (this.turn === this.player2) {
     this.turn = this.player1;
   }
 }

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
