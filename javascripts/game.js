class Game {
  constructor(turnLeft = 10) {
    this.turnLeft = turnLeft;
  }
  newTurn() {
    this.turnLeft = this.turnLeft - 1;

    if (this.turnLeft >= 0) {
      const newTurn = new Turn();
      players.map((player) => {
        if (gameNew.turnLeft == player.activeAttack) {
          let victim = players[player.target];
          if (player.hp > 0) {
            player.attackSpe(victim);
          } else {
            console.log(`${player.name} est mort entre temps...`);
          }
        }
      });
      if (players.filter((player) => player.status == "playing").length > 1) {
        newTurn.start();
        this.newTurn();
      } else {
        players.filter((player) => {
          if (player.status == "playing") {
            player.status = "winner";
            console.log(
              `%cWinner: ${player.name.toUpperCase()}!`,
              "font-size:20px;font-weight:600;color:lime;"
            );
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
          player.status = "winner";
          console.log(
            `%cWinner: ${player.name.toUpperCase()}!`,
            "font-size:20px;font-weight:600;color:lime;"
          );
        } else {
          player.status = "loser";
        }
      });
    }
  }
}
