class Monk extends Character {
  constructor(name, hp = 8, dmg = 2, mana = 49, status) {
    super(name, hp, dmg, mana, status);
  }

  heal(victim) {
    if (this.mana >= 25) {
      this.hp = this.hp + 8;
      this.mana = this.mana - 25;
    } else {
      console.log("Tu n'as plus de mana pour attaquer, tu attaques avec la classique ");
      this.dealDamage(victim)
    }
  }
}

// Le Monk, quand a lui, aura une attaque spéciale heal rendant 8 PV. Elle coute 25 mana.
