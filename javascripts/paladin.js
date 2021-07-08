class Paladin extends Character {
  constructor(name, hp = 16, dmg = 3, mana = 160, status) {
    super(name, hp, dmg, mana, status);
  }

  healingLighting(victim) {
    if (this.mana >= 40) {
      victim.takeDamage(4);
      this.hp = this.hp + 5;
      this.mana = this.mana - 40;
    } else {
      console.log(
        "Tu n'as plus de mana pour attaquer, tu attaques avec la classique "
      );
      this.dealDamage(victim);
    }
  }
}

// Le Paladin aura une attaque spéciale Healing Lighting, infligeant 4 dégâts et le soignant de 5. Elle coute 40 mana.
