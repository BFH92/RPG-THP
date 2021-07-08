class Turn {
  start() {
    console.log("let's play!");
    console.log(`Turn number ${10 - gameNew.turnLeft}`);

    players.map((player) => {
      console.log(` ${player.name} : point de vie => ${player.hp}, status => ${player.status}, mana => ${player.mana}`);
    });

    shuffle.map((player) => {
      if (player.hp > 0) {
        shuffle.map((player) =>
          console.log(
            `Pour attaquer ${player.name} tape : ${shuffle.indexOf(player)}`
          )
        ); //ROUE DE SECOURS?
        player.attackOf(player);
        players.map((player) => {
          console.log(` ${player.name} : point de vie => ${player.hp}`);
        });
      }
    });
  }
}
