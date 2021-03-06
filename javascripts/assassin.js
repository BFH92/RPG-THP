class Assassin extends Character {
  constructor(name, hp = 6, dmg = 6, mana = 20, status, activeDefense =0,activeAttack=0, target=0) {
    super(name, hp, dmg, mana, status);
    this.activeDefense = activeDefense;
    this.activeAttack = activeAttack;
    this.target = target;
  }
  
  shadowHit(victim) {
    this.activeDefense = gameNew.turnLeft-1 ;
    this.activeAttack = gameNew.turnLeft-1 ;
    this.target = shuffle.indexOf(victim);
    this.mana = this.mana - 20;
    console.log(`%c${this.name} prépare un mauvais coup ... `, "color:orange")
  }

  benefits(dmg){
    this.takeDamage(dmg-dmg)
    console.log(`${this.name} a une immunité pour ce tour ! `)
  }
  
  attackSpe(victim) {
    console.log(`${this.name} ATTAQUE ${victim.name} EN TRAITRE !`)
    
    if(victim.activeDefense == gameNew.turnLeft){
      victim.benefits(7)
    }else{
      victim.takeDamage(7);
    }
      
    if (victim.hp >0) {
      this.takeDamage(7);
      console.log(`${this.name} a ÉCHOUÉ dans son ASSASSINAT, il perd 7 points de vie`)
    }
  
  }
}
  


// L'Assassin aura une attaque spéciale Shadow hit lui permettant de ne pas prendre de dégâts lors du prochain tour.
// Il portera alors une attaque spéciale infligeant 7 dégâts puis, si l'adversaire n'est pas mort, l'assassin perdra 7 dégâts à son tour. 
//Cette attaque coûte 20 mana.
