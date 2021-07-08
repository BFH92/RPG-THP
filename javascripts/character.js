class Character {
  constructor(name, hp, dmg, mana, status = "playing") {
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.status = status;
  }

  takeDamage(dmgReceived) {
    if (dmgReceived > 0) {
      this.hp = this.hp - dmgReceived;
    }
    if (this.hp <= 0) {
      this.status = "loser";
    }
  }

  dealDamage(victim) {

    if(victim.activeDefense == gameNew.turnLeft){
      victim.benefits(this.dmg)
    } else {
      victim.takeDamage(this.dmg);
      console.log(
        `%c${(this.name).toUpperCase()} is attacking ${(victim.name).toUpperCase()}.
        He deals him ${this.dmg} damages.
        ${(victim.name).toUpperCase()} got ${victim.hp} lifepoints left.`, "color:orange"
      )
    }    
  }

  specialAttack(player, input) {
    if (player instanceof Assassin) {
      player.shadowHit(players[input]);
    } else if (player instanceof Berserker) {
      player.rage();
    } else if (player instanceof Fighter) {
      player.darkVision(players[input]);
    } else if (player instanceof Monk) {
      player.heal();
    } else if (player instanceof Paladin) {
      player.healingLighting(players[input]);
    } else if (player instanceof Wizard) {
      player.fireball(players[input]);
    }
  }

  attackOf(player) {
    // console.log(`${player.name} joue`);
    // console.log(players.indexOf(player)); //FIXME: voir comment remplacer l'index du joueur comme input par le nom du joueur
    var playersName =[]
    players.map((p)=> 
        {
          if(p.name != player.name) {
          playersName.push(p.name)
          }
        } 
        
        )

    var input = Number(prompt(
      `${(player.name).toUpperCase()}: wich player do you want to attack? 

      ${shuffle.indexOf(shuffle[0])} - ${shuffle[0].name}  
      ${shuffle.indexOf(shuffle[1])} - ${shuffle[1].name}
      ${shuffle.indexOf(shuffle[2])} - ${shuffle[2].name}
    
    

    `));
    //TODO: contenu statique

    if (this.validInput(input, player)) {
      var attackInput = prompt(
        `Which attack do you want to do?
        [0] = Classic (damage: ${player.dmg}, mana: 0)
        [1] = Special (mana: ${player.mana})
      `);

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
