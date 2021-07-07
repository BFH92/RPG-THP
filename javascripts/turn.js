class Turn {
  
  startTurn() {

  console.log("let's play!");
  console.log(`Turn number ${10 - gameNew.turnLeft}`);
  
  
  players.map(player =>
    console.log(`Pour attaquer ${player.name} tape : ${players.indexOf(player)}`)
  )

  
  this.switchPlayer()

  console.log(players)

}

  switchPlayer(){
    this.attack()
  }

  attack(){
    console.log(`${playerSelected.name} joue`);
    console.log(players.indexOf(playerSelected))
    var input = Number(prompt("quel joueur veux-tu attaquer ?"));
    
    if (input.lenght == 0){
      alert("Le numéro de joueur ne peut être vide")
      this.attack()
    }
    else if (input === players.indexOf(playerSelected)){
      alert("Le numéro de joueur est incorrect")
      this.attack()
    }
    else if (players[input]){
      (playerSelected.dealDamage(players[input]))
     }
    
    else {
      alert("Le numéro de joueur est incorrect")
      this.attack()
    }
  }

  
}