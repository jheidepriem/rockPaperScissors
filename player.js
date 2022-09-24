class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.turn = '';
  }
}

takeTurn(gameType) {
  if (newGame.selectedGame === "classic") {
    var fighters = ["rock", "paper", "scissors"];
      newGame.computer.turn =
        fighters[Math.floor(Math.random() * fighters.length)];
  }  else if (newgame.selectedGame === "difficult") {
    var fighters = ["rock", "paper", "scissors", "dino", "octo"]
    newGame.computer.turn =
      warriors[Math.floor(Math.random() * fighters.length)]
  }
}
