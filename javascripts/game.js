class Game {
  constructor(turnLeft = 10) {
    this.turnLeft = turnLeft;
  }

  newTurn() {
    this.turnLeft = this.turnLeft - 1;
    if (this.turnLeft >= 0) {
      console.log(`Turn number ${10 - this.turnLeft}`)
      this.newTurn()
    } else {
      console.log("Game Over")
    }
  }

}

const grace = new Fighter()
const ulder = new Paladin()
const moana = new Monk()
const draven = new Berserker()
const carl = new Assassin()
console.log(grace,ulder)

const gameNew = new Game
gameNew.newTurn()
//console.log(gameNew)