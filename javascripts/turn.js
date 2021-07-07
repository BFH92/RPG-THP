class Turn {
  
  startTurn() {

  console.log("let's play!");
  console.log(`Turn number ${10 - gameNew.turnLeft}`);
  
  
  players.map(player =>{
    console.log(` ${player.name} : point de vie => ${player.hp}`)
  }
  )
  players.map(player =>{
    console.log(`Pour attaquer ${player.name} tape : ${players.indexOf(player)}`)
    
    player.attackOf(player)
  }
  )
  
  //this.switchPlayer()

}

  //switchPlayer(){
  //  this.attack()
  //}

  

  
}