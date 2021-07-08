class Game {
  constructor(turnLeft = 10) {
    this.turnLeft = turnLeft;
  }

  newTurn() {
    this.turnLeft = this.turnLeft - 1;
    
    if (this.turnLeft >= 0) {
      const newTurn = new Turn();
      players.map((player) => {
        //console.log(` ${player.name} : point de vie => ${player.hp}`);
        //console.log(` ${player.name} : status => ${player.status}`);
        if (gameNew.turnLeft == player.activeAttack){
        let victim = players[player.target]
        player.murder(victim)
        console.log("ASSSASSIN ATTACK")
        }
      });
      if (players.filter((player) => player.status == "playing").length > 1) {
      
        newTurn.start();
        
        this.newTurn();
        } else {
        players.filter((player) => {
          if (player.status == "playing") {
            player.status = "winner";
            console.log(`winner :${player.name}`);
          }
          });
        }
    } else {
      
      console.log("Game Over");
        var playerByHp = players.sort((a, b) => {
          return b.hp - a.hp;
      });
      
      playerByHp.filter((player) => {
        if (playerByHp.indexOf(player)==0){
          player.status = "winner"
          console.log(`winner : ${player.name}`);
        }else{
          player.status = "loser"
        }
      });
    }
  }
}

const grace = new Fighter("grace");
const ulder = new Assassin("Assassin2");
const albert = new Assassin("assassin");
const players = [grace, ulder,albert];
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
