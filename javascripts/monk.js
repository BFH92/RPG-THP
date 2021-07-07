class Monk extends Character {
  constructor(name, hp = 8, dmg = 2, mana = 200, status) {
    super(name, hp, dmg, mana, status);
  }

  heal() {
    this.hp = this.hp + 8;
    this.mana = this.mana - 25;
  }
}

// Le Monk, quand a lui, aura une attaque spéciale heal rendant 8 PV. Elle coute 25 mana.
