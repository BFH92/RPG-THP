class Game {
  constructor(turnLeft = 10) {
    this.turnLeft = turnLeft;
  }

  newTurn() {
    this.turnLeft = this.turnLeft - 1;
    const t = new Turn
    // if (this.turnLeft == 0) {

    // } else {
    //   Turn.new;
    // }
  }

}

const grace = new Fighter()
const ulder = new Paladin()
console.log(grace,ulder)

const gameNew = new Game
gameNew.newTurn()
console.log(gameNew)