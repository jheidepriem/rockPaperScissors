class Game {
  constructor(selectedGame, winner) {
    this.human = new Player("human","🙋‍♀️");
    this.computer = new Player("computer", "🖥");
    this.selectedGame = ``;
    this.gameInfo = ``;
    this.winner = ``;
  }

chooseClassic() {
  this.selectedGame = "classic";
}

chooseDifficult() {
  this.selectedGame = "difficult";
}

playGame() {
  if (this.human.turn === "rock" &&
    this.computer.turn === "scissors") {
    return (this.winner = this.human)
  } else if (this.human.turn === "scissors" &&
    this.computer.turn === "paper") {
    return (this.winner = this.human)
  } else if (this.human.turn === "paper" &&
    this.computer.turn === "rock") {
    return (this.winner = this.human)
  } else if (this.human.turn === "rock" &&
    this.computer.turn === "octo") {
    return (this.winner = this.human)
  } else if (this.human.turn === "paper" &&
    this.computer.turn === "dino") {
    return (this.winner = this.human)
  } else if (this.human.turn === "scissors" &&
    this.computer.turn === "octo") {
    return (this.winner = this.human)
  } else if (this.human.turn === "octo" &&
    this.computer.turn === "dino") {
    return (this.winner = this.human)
  } else if (this.human.turn === "dino" &&
    this.computer.turn === "scissors") {
    return (this.winner = this.human)
  } else if (this.human.turn === "octo" &&
    this.computer.turn === "paper") {
    return (this.winner = this.human)
  } else if (this.human.turn === "dino" &&
    this.computer.turn === "rock") {
    return (this.winner = this.human)
  } else if (this.human.turn === this.computer.turn) {
    return (this.winner = `It's a Draw`)
  }
  else {
    return (this.winner = this.computer);
  }
};

addToScores() {
  if (this.winner === this.human) {
    this.player.wins++;
  }
  if (this.winner === this.computer) {
    this.computer.wins++;
    }
  }
};
