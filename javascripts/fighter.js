class Fighter extends Character {
  constructor(name, hp = 12, dmg = 4, mana = 40, status) {
    super(name, hp, dmg, mana, status);
  }

  darkVision(victim) {
    victim.hp = victim.hp - 5;
    this.mana = this.mana - 20;
    
  }
}

// Le Fighter aura une attaque spéciale Dark Vision, infligeant 5 dégâts. Jusqu'au prochain tour, il prendra 2 dégâts de moins par coup reçu. Elle coute 20 mana.