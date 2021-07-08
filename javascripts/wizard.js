class Wizard extends Character {
  constructor(name, hp = 10, dmg = 2, mana = 200, status) {
    super(name, hp, dmg, mana, status);
  }   
  
  fireball(victim) {
    victim.takeDamage(7);
    this.mana = this.mana - 25;
  }
}

// Le wizard a une attaque spéciale Fireball qui inflige 7 points de dégât et qui coûte 25 points de mana.