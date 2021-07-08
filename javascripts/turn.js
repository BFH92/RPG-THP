class Turn {
  start() {
    console.log(`%c=> TURN N°${10 - gameNew.turnLeft}`, "font-size:14px;font-weight:600;");

    players.map(player => {
      console.log(
        `%c${(player.name).toUpperCase()}:
        Class:  ${player.constructor.name}
        Health: ${player.hp},
        Damage: ${player.dmg},
        Mana:   ${player.mana},
        Status: ${player.status}.`,
        "color: purple"      
      );
    });



    shuffle.map((player) => {
      player.attackOf(player);  
    });  
  }
}
