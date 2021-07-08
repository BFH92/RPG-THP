class Turn {
  start() {
    console.log("let's play!");
    console.log(`Turn number ${10 - gameNew.turnLeft}`);

    

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

    players.map((player) => {
      console.log(` ${player.name} : point de vie => ${player.hp}`);
      console.log(` ${player.name} : status => ${player.status}`);
      if (gameNew.turnLeft == player.activeAttack){
      let victim = players[player.target]
      player.murder(victim)
      console.log("ASSSASSIN ATTACK")
      }
    });
  }
  
}
