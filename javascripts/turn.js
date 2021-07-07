class Turn {
  
  startTurn() {

    console.log("let's play!");
    console.log(`Turn number ${10 - gameNew.turnLeft}`);
    
    
    players.map(player =>{
      console.log(` ${player.name} : point de vie => ${player.hp}`)
    });

    var shuffle = players.sort (function(a, b) {
      return 0.5 - Math.random()});

    shuffle.map(player =>{
      shuffle.map(player =>
        console.log(`Pour attaquer ${player.name} tape : ${shuffle.indexOf(player)}`)
      );//ROUE DE SECOURS?
      player.attackOf(player)
      players.map(player =>{
        console.log(` ${player.name} : point de vie => ${player.hp}`)
      });
    });
  }
}