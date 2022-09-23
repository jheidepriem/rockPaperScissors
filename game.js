class Game {
  constructor(selectedGame) {
    this.human = new Player('human','');
    this.computer = new Player('computer', '');
    this.selectedGame = selectedGame
    this.gameInfo = [];
    this.isAWin = false;
    this.isADraw = false;
    this.resetGame = null;
  }
}

function playClassicGame() {

}


function playDifficultGame() {

}
