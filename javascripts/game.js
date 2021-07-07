class Game {
  constructor(turnLeft = 10) {
    this.turnLeft = turnLeft;
  }

  newTurn() {
    this.turnLeft = this.turnLeft - 1;

    if (this.turnLeft >= 0) {
      const newTurn = new Turn();
      if (players.filter((player) => player.status == "playing").length > 1) {
        newTurn.start();
        this.newTurn();
      } else {
        var winner = players.filter((player) => {
          if (player.status == "playing") {
            player.status = "winner";
            console.log(`winner :${player.name}`);
          }
        });
      }
    } else {
      console.log("Game Over");
    }
  }
}

const grace = new Fighter("grace");
const ulder = new Paladin("ulder");
const albert = new Paladin("albert");
const players = [grace, ulder, albert];
const gameNew = new Game();
var shuffle = players.sort(function (a, b) {
  return 0.5 - Math.random();
});
//var rand = Math.floor(Math.random()*players.length);
//var playerSelected = players[rand];

gameNew.newTurn();

//const moana = new Monk("moana");
//const draven = new Berserker();
//const carl = new Assassin();

console.log(players);

//console.log(gameNew)
