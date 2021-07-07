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
    victim.takeDamage(this.dmg);
    // if (victim.hp <= 0) {
    //   this.mana = this.mana + 20;
    // }
  }

  attackOf(player) {
    console.log(`${player.name} joue`);
    console.log(players.indexOf(player)); //FIXME: voir comment remplacer l'index du joueur comme inout par le nom du joueur
    var input = Number(prompt("quel joueur veux-tu attaquer ?"));

    if (input.lenght == 0) {
      alert("Le numéro de joueur ne peut être vide");
      this.attackOf(player);
    } else if (input === players.indexOf(player)) {
      alert("Le joueur ne peut pas s'attaquer soi-même !");
      this.attackOf(player);
    }
    // si joueur correspondant à l'input est mort => relance de this.AttackOf()
    else if (players[input].hp <= 0) {
      alert("Le joueur est déjà mort.. ");
      this.attackOf(player);
    } else if (players[input]) {
      player.dealDamage(players[input]);
    } else {
      alert("Le numéro de joueur est incorrect");
      this.attackOf(player);
    }
  }
}
