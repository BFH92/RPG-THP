class Monk extends Character {
  constructor(name, hp = 8, dmg = 50, mana = 200, status) {
    super(name, hp, dmg, mana, status);
  }

  heal(victim) {
    if (this.mana >= 25) {
      this.hp = this.hp + 8;
      this.mana = this.mana - 25;
      console.log(
        `%c${(this.name).toUpperCase()} reprend des couleurs et remonte à ${this.hp} points de vie.`, "color:green"
      )
    } else {
      console.log(
        "Tu n'as plus de mana pour l'attaque spéciale, tu attaques avec la classique "
      );
      this.dealDamage(victim);
    }
  }
}

// Le Monk, quand a lui, aura une attaque spéciale heal rendant 8 PV. Elle coute 25 mana.
