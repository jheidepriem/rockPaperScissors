class Game {
  constructor(rock, paper, scissors, octo, dino) {
    this.player1 = new Player(1,'💁‍♀️');
    this.player2 = new Player(2, '🖥');
    this.turn = this.player1;
    this.gameType1 = [rock, paper, scissors];
    this.gameType2 = [rock, paper, scissors, octo, dino];
    this.isAWin = false;
    this.isADraw = false;
    this.resetGame = null;
  }
}
