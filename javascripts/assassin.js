class Assassin extends Character {
  constructor(hp = 6, dmg = 6, mana = 20, status) {
    super(hp, dmg, mana, status);
  }
  
  shadowHit(victim) {
    victim.hp = victim.hp - 7;
    if (victim.hp > 0) {
      this.hp = this.hp - 7;
    }
    this.mana = this.mana - 20;
  }
}

// L'Assassin aura une attaque spéciale Shadow hit lui permettant de ne pas prendre de dégâts lors du prochain tour. Il portera alors une attaque spéciale infligeant 7 dégâts puis, si l'adversaire n'est pas mort, l'assassin perdra 7 dégâts à son tour. Cette attaque coûte 20 mana.