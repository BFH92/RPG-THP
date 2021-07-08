


const grace  = new Fighter("Grace");
const ulder  = new Wizard("Ulder");
const carl   = new Assassin("Carl");
const moana  = new Monk("Moana");
const draven = new Berserker("Draven");

const players = [grace,ulder,carl,moana,draven];

const gameNew = new Game();
console.log("%cLet's the game begin!","font-size:20px;font-weight:600;color:blue;");
var shuffle = players.sort(function (a, b) {
  return 0.5 - Math.random();
});

gameNew.newTurn();
