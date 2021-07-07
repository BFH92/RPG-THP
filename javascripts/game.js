class Game {
  constructor(turnLeft = 2) {
    this.turnLeft = turnLeft;

  }

  newTurn() {
  this.turnLeft = this.turnLeft - 1;

  if (this.turnLeft >= 0) {
    console.log(players.hp)
    const newTurn = new Turn;
    newTurn.startTurn();
    this.newTurn();
  } else {
      console.log("Game Over")
  }
  }

}

const grace = new Fighter("grace");
const ulder = new Paladin("ulder");
const albert = new Paladin("albert");
const players = [grace,ulder,albert];
const gameNew = new Game;

//var rand = Math.floor(Math.random()*players.length);
//var playerSelected = players[rand];

gameNew.newTurn()


//const moana = new Monk("moana");
//const draven = new Berserker();
//const carl = new Assassin();


console.log(grace,ulder);





//console.log(gameNew)