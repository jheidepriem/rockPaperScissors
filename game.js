class Game {
  constructor() {
    this.player1 = new Player('human','💁‍♀️');
    this.player2 = new Player('computer', '🖥');
    this.turn = this.player1;
    this.gameType1 = [];
    this.gameType2 = [];
    this.isAWin = false;
    this.isADraw = false;
    this.resetGame = null;

  }
}
