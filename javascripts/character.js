class Character {
  constructor(hp, dmg, mana, status = "playing") {
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
}