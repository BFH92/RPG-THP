class Wizard extends Character {
  constructor(name, hp = 10, dmg = 2, mana = 200, status) {
    super(name, hp, dmg, mana, status);
  }

  fireball(victim) {
    if (this.mana >= 25) {
      victim.takeDamage(7);
      this.mana = this.mana - 25;
      console.log(
        `%c${(this.name).toUpperCase()} s'enflamme et attaque ${(victim.name).toUpperCase()} avec sa Spéciale et inflige 7 points de dégâts!!
        ${(victim.name).toUpperCase()} a ${victim.hp} points de vie.`, "color:orange"
      )
    } else {
      console.log(
        "Tu n'as plus de mana pour l'attaque spéciale, tu attaques avec la classique "
      );
      this.dealDamage(victim);
    }
  }
}

// Le wizard a une attaque spéciale Fireball qui inflige 7 points de dégât et qui coûte 25 points de mana.
