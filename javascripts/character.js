class Character {
  constructor(name, hp, dmg, mana, status = "playing") {
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.status =status;
    
  }

  takeDamage(dmgReceived) {
    this.hp = this.hp - dmgReceived;
    if (this.hp <= 0) {
      this.status = "loser"
    }
  }

  dealDamage(victim) {
    victim.takeDamage(this.dmg);
    // if (victim.hp <= 0) {
    //   this.mana = this.mana + 20;
    // }
  }

  attackOf(player){
    console.log(`${player.name} joue`);
    console.log(players.indexOf(player))
    var input = Number(prompt("quel joueur veux-tu attaquer ?"));
    
    if (input.lenght == 0){
      alert("Le numéro de joueur ne peut être vide")
      this.attack()
    }
    else if (input === players.indexOf(player)){
      alert("Le numéro de joueur est incorrect")
      this.attack()
    }
    else if (players[input]){
      (player.dealDamage(players[input]))
     }
    
    else {
      alert("Le numéro de joueur est incorrect")
      this.attack()
    }

    players.map(player =>{
      console.log(` ${player.name} : point de vie => ${player.hp}`)
    }
    )
  }
}