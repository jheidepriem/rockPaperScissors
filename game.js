class Game {
  constructor() {
    this.player1 = new Player(1,'💁‍♀️');
    this.player2 = new Player(2, '🖥');
    this.turn = this.player1;
    this.gameType1 = [];
    this.player1Fighter = ""
    this.player2Fighter = ""
    this.isAWin = false;
    this.isADraw = false;
    this.resetGame = null;
  }
}

  function playClassicGame() {
    if (this.player1 === "scissors" && this.player2 === "scissors" ||
      this.player1 === "rock" && this.player2 === "rock" || this.player1
      === "paper" && this.player2 === "paper") {
      this.isADraw = true;
    } else if (this.player1 === "rock" && this.player2 === "scissors"){
      this.isAWin = true;
    } else if (this.player1 === "paper" && this.player2 === "rock") {
      this.isAWin = true;
    } else if (this.player1 === "scissors" && this.player2 === "paper") {
      this.isAWin = true;
    } console.log(playClassicGame)
  }

  function playDifficultGame() {
    if (this.player1 === "rock" && this.player2 === "scissors" || "octo") {
      this.isAWin = true;
    } else if (this.player1 === "paper" && this.player2 === "rock" || "dino") {
      this.isAWin = true;
    } else if (this.player1 === "scissors" && this.player2 === "paper" || "octo") {
      this.isAWin = true;
    } else if (this.player1 === "octo" && this.player2 === "paper" || "dino") {
      this.isAWin = true;
    } else if (this.player1 === "dino" && this.player2 === "scissors" || "rock") {
      this.isAWin = true;
    }
  }
