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
        players.filter((player) => {
          if (player.status == "playing") {
            player.status = "winner";
            console.log(`%cWinner: ${(player.name).toUpperCase()}!`,"font-size:20px;font-weight:600;color:lime;");
          }
          });
        }
    } else {      
      console.log("Game Over");
        var playerByHp = players.sort((a, b) => {
          return b.hp - a.hp;
      });
      
      playerByHp.filter((player) => {
        if (playerByHp.indexOf(player) == 0) {
          player.status = "winner"
          console.log(`%cWinner: ${(player.name).toUpperCase()}!`,"font-size:20px;font-weight:600;color:lime;");
        }else{
          player.status = "loser"
        }
      });
    }
  }
}

const grace = new Monk("grace");
const ulder = new Monk("ulder");
const albert = new Paladin("albert");
const players = [grace, ulder,albert];
const gameNew = new Game();
console.log("%cLet's the game begin!","font-size:20px;font-weight:600;color:blue;");
var shuffle = players.sort(function (a, b) {
  return 0.5 - Math.random();
});
//var rand = Math.floor(Math.random()*players.length);
//var playerSelected = players[rand];

gameNew.newTurn();