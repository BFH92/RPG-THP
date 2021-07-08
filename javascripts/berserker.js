class Berserker extends Character {
  constructor(name, hp = 8, dmg = 4, mana = 0, status) {
    super(name, hp, dmg, mana, status);
  }   
  
  rage(victim) {
    this.dmg = this.dmg + 1
    victim.takeDamage(this.dmg);
    this.takeDamage(1)
    console.log(
      `%c${(this.name).toUpperCase()} attaque avec RAAAAAGE ${(victim.name).toUpperCase()}.
      Il inflige ${this.dmg} points de dégâts.
      ${(victim.name).toUpperCase()} a maintenant ${victim.hp} points de vie.`, "color:red"
    )
  }
}

// Le Berzerker aura une attaque spéciale Rage lui donnant +1 pour ses attaques pour tout le reste de la partie mais lui enlevant 1 hp. Elle coûte 0 mana. Elle peut être appelée plusieurs fois (par exemple, si le Berzerker a fait son attaque spéciale 2 fois, ses attaques infligeront 4 + 2 = 6 points de dégât).