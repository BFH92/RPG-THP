class Fighter extends Character {
  constructor(name, hp = 12, dmg = 4, mana = 40, status, activeDefense = 0) {
    super(name, hp, dmg, mana, status);
    this.activeDefense = activeDefense;
  }

  darkVision(victim) {
    if (this.mana >= 20) {
      this.activeDefense = gameNew.turnLeft;
      victim.takeDamage(5);
      this.mana = this.mana - 20;
      console.log(
        `%c${(this.name).toUpperCase()} attaque ${(victim.name).toUpperCase()} avec sa Spéciale et inflige 5 points de dégâts.
        ${(victim.name).toUpperCase()} a ${victim.hp} points de vie.`, "color:orange"
      )
    } else {
      console.log(
        "Tu n'as plus de mana pour l'attaque spéciale, tu attaques avec la classique "
      );
      this.dealDamage(victim);
    }
  }

  benefits(dmg) {
    if (gameNew.turnLeft == this.activeDefense) {
      this.takeDamage(dmg - 2);
      
    }

  }
}
// Le Fighter aura une attaque spéciale Dark Vision, infligeant 5 dégâts.
//Jusqu'au prochain tour, il prendra 2 dégâts de moins par coup reçu.
// Elle coute 20 mana.
