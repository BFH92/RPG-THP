class Character {
  constructor(name, hp, dmg, mana, status = "playing") {
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.status = status;
  }

  takeDamage(dmgReceived) {
    this.hp = this.hp - dmgReceived;
    if (this.hp <= 0) {
      this.status = "loser";
    }
  }

  dealDamage(victim) {
    if(victim.activeDefense !=0){
      victim.benefits(this.dmg)
    }else{
      victim.takeDamage(this.dmg);
    }
  
    
  }


    
    // if (victim.hp <= 0) {
    //   this.mana = this.mana + 20;
    // }

  specialAttack(player, input) {
    if (player instanceof Assassin) {
      player.shadowHit(players[input]);
    } else if (player instanceof Berserker) {
      player.rage();
    } else if (player instanceof Fighter) {
      player.darkVision(players[input]);
    } else if (player instanceof Monk) {
      player.heal(players[input]);
    } else if (player instanceof Paladin) {
      player.healingLighting(players[input]);
    }
  }

  attackOf(player) {
    console.log(`${player.name} joue`);
    console.log(players.indexOf(player)); //FIXME: voir comment remplacer l'index du joueur comme inout par le nom du joueur
    var input = Number(prompt("quel joueur veux-tu attaquer ?"));

    if (this.validInput(input, player)) {
      var attackInput = prompt("quelle attaque veux-tu faire ?");
      console.log("0 = attaque classique");
      console.log("1 = attaque spéciale");
      if (attackInput == 0) {
        player.dealDamage(players[input]);
      } else if (attackInput == 1) {
        this.specialAttack(player, input);
      } else {
        alert("cette attaque n'est pas reconnue");
        this.attackOf(player);
      }
    }
  }

  validInput(input, player) {
    if (players[input] == undefined) {
      alert("ce joueur n'existe pas..");
      this.attackOf(player);
    } else if (input.lenght == 0) {
      alert("Le numéro de joueur ne peut être vide");
      this.attackOf(player);
    } else if (input === players.indexOf(player)) {
      alert("Le joueur ne peut pas s'attaquer soi-même !");
      this.attackOf(player);
    } else if (players[input].hp <= 0) {
      alert("Le joueur est déjà mort.. ");
      this.attackOf(player);
    } else if (players[input]) {
      return true;
    }
  }
}
