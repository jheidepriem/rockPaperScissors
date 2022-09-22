// -------------->Global Variables---------------------->

var game = new Game();
var fighterChoice = this.gameType1



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
var humanWinsMessage = document.querySelector('.human-wins')
var computerWinsMessage = document.querySelector('.computer-wins')
var drawMessage = document.querySelector('.draw-message')
var fighterSection = document.querySelector('fighter-section')


//---------------->Event Listeners---------------------->

window.addEventListener('load', onPageLoad);
classicGame.addEventListener('click', pickClassicGame);
difficultGame.addEventListener('click', pickDifficultGame);
changeGameButton.addEventListener('click', changeGame);



//----------------->Dom Handlers------------------------>

function updateMessage() {
  if(game.isADraw) {

  }
}

// function updateWinner() {
//   //update winner score
//
// }
//
// function pickClassicGame() {
//   //hide games and show fighters
// }
//
// function pickDifficultGame() {
//   //hide games and show fighters
// }
//
// function onPageLoad() {
//   //reset window with window eventListener
// }
//
function changePage(show, hide) {
show.classList.remove('hidden')
hide.classList.add('hidden')
 }


//---------------->Data Handlers----------------------->


function pickFighter(fighter) {
  this.player1Fighter = fighter
  console.log(fighter);
}

function getScore() {

}

function getComputerFighter() {
  this.player2Fighter = getRandomRps()
}


// //---------------->Misc Functions----------------------->
//
function getRandomRps(array) {
  return Math.floor(Math.random() * array.length)

}
