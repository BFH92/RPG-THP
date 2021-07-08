class Character {
  constructor(name, hp, dmg, mana, status = "playing") {
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.status = status;
  }

  takeDamage(dmgReceived) {
    if (dmgReceived >0){
      this.hp = this.hp - dmgReceived;
    }
    if (this.hp <= 0) {
      this.status = "loser";
    }
  }

  dealDamage(victim) {
    if (victim.activeDefense == gameNew.turnleft) {
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
    }
  }

  attackOf(player) {
    // console.log(`${player.name} joue`);
    // console.log(players.indexOf(player)); //FIXME: voir comment remplacer l'index du joueur comme input par le nom du joueur
    var input = Number(prompt(
      `${(player.name).toUpperCase()}: wich player do you want to attack?
      [0] = XXX
      [1] = XXX
      [2] = XXX
    `));

    if (this.validInput(input, player)) {
      var attackInput = prompt(
        `Which attack do you want to do?
        [0] = Classic (damage: ${player.dmg}, mana: 0)
        [1] = Special (damage: ${player.dmg}, mana: ${player.mana})
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
