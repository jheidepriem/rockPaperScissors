//-------------->Global Variables---------------------->

var game = new Game();
var fighterChoice = this.gameType1
var randomComputerFighter = Math.floor(Math.random() array.length);


//----------------->Query Selectors--------------------->

var classicGame = document.querySelector(".game-1")
var difficultGame = document.querySelector(".game-2")
var rockButton = document.querySelector(".rock-button")
var paperButton = document.querySelector(".paper-button")
var scissorsButton = document.querySelector(".scissors-button")
var dinoButton = document.querySelector(".dino-button")
var octoButton = document.querySelector(".octo-button")
var changeGameButton = document.querySelector(".change-game-button")


//---------------->Event Listeners---------------------->

window.addEventListener('load', onPageLoad);
classicGame.addEventListener('click', pickClassicGame);
difficultGame.addEventListener('click', pickDifficultGame);
changeGameButton.addEventListener('click' changeGame);





//----------------->Dom Handlers------------------------>

//function to load fighters when games are clicked
pickClassicGame() {
 classicGame.classList.remove('hidden');
 difficultGame.classList.remove('hidden');
 rockButton.classList.add('hidden');
 paperButton.classList.add('hidden');
 scissorsButton.classList.add('hidden')
}

pickDifficultGame() {
  classicGame.classList.remove('hidden');
  difficultGame.classList.remove('hidden');
  rockButton.classList.add('hidden');
  paperButton.classList.add('hidden');
  scissorsButton.classList.add('hidden')
  dinoButton.classList.add('.hidden')
  octoButton.classList.add('.hidden')

//shows all five token buttons

}

changeGame() {
//hides tokens, shows classic and difficult game,
//resets wins, hides new game button
}

showClassicResult() {
  //you win, you lose, it's a draw
}

showDifficultResult() {

}

//---------------->Data Handlers----------------------->

playClassicGame(name) {
  //// show rock paper scissors and choose your fighter!
}

// choose your fighter for classic games
// rock > scissors
//scissors > paper
//paper > rock
playDifficultGame(playerToken2) {

}

getScore(wins, player1, player2) {

}
//choose your fighter for difficult games
// rock > scissors and octo
// paper > rock and dino
//scissors > paper and octo
//octo > paper and dino
//dino > scissors and rock
getComputerChoice() {

}



//---------------->Misc Functions----------------------->
