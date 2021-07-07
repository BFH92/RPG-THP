class Paladin extends Character {
  constructor(hp = 16, dmg = 3, mana = 160, status) {
    super(hp, dmg, mana, status);
  }
  
  healingLighting(victim) {
    victim.hp = victim.hp - 4;
    this.hp = this.hp + 5;
    this.mana = this.mana - 40;
  }
}

// Le Paladin aura une attaque spéciale Healing Lighting, infligeant 4 dégâts et le soignant de 5. Elle coute 40 mana.
