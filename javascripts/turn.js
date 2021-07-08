class Turn {
  start() {
    console.log(`%c=> TURN N°${10 - gameNew.turnLeft}`, "font-size:14px;font-weight:600;");

    players.map(player => {
      console.log(
        `%c${(player.name).toUpperCase()}:
        Health: ${player.hp},
        Damage: ${player.dmg},
        Mana:   ${player.mana},
        Status: ${player.status}.`,
        "color: purple"      
      );
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