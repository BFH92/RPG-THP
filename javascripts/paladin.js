class Paladin extends Character {
  constructor(name, hp = 16, dmg = 3, mana = 160, status) {
    super(name, hp, dmg, mana, status);
  }

  healingLighting(victim) {
    if (this.mana >= 40) {
      victim.takeDamage(4);
      this.hp = this.hp + 5;
      this.mana = this.mana - 40;
      console.log(
        `%c${(this.name).toUpperCase()} attaque ${(victim.name).toUpperCase()} avec sa Spéciale et inflige 4 points de dégâts.
        Il récupère 5 points de vie !
        ${(victim.name).toUpperCase()} a  ${victim.hp} points de vie.`, "color:orange"
      )
    } else {
      console.log(
        "Tu n'as plus de mana pour attaquer, tu attaques avec la classique "
      );
      this.dealDamage(victim);
    }
  }
}

// Le Paladin aura une attaque spéciale Healing Lighting, infligeant 4 dégâts et le soignant de 5. Elle coute 40 mana.
