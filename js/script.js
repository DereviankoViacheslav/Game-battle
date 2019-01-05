const player1 = new Character(`Вася`);
const player2 = new Character(`Петя`);

const game = new Game(player1, player2);
game.start();

/* ----- classes ----- */
function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;

  this.start = function () {
    while (this.player1.health > 0 && this.player2.health > 0) {
      this.chekResult(this.player1, this.player2);
      this.chekResult(this.player2, this.player1);
      this.showHealth();
    }
  };

  this.chekResult = function (player1, player2) {
    const attackPlayer1 = player1.attack();
    const defensePlayer2 = player2.defense();
    if (attackPlayer1 !== defensePlayer2) {
      player2.health -= 10;
    }
    this.showFight(player1, attackPlayer1, player2, defensePlayer2);
  };

  this.showFight = function (player1, attackPlayer1, player2, defensePlayer2) {
    console.log(`\t${player1.name} наносит удар в ${attackPlayer1}\n\t${player2.name} ${(defensePlayer2 === attackPlayer1) ? `блокирует` : `пропускает`} удар`);
  };

  this.showHealth = function () {
    console.log(`\t${this.player1.name}: ${this.player1.health} / ${this.player2.name}: ${this.player2.health}`);
    if (player1.health <= 0 || player2.health <= 0) {
      this.showResultGame();
    }
  };

  this.showResultGame = function () {
    console.log(`Победил ${(this.player1.health > this.player2.health) ?this.player1.name : this.player2.name}`);
  };
}

function Character(name = `MyHero`) {
  this.name = name;
  this.health = 100;
  this.kicks = [`голову`, `торс`, `ноги`];

  this.attack = function () {
    return this.kicks[Math.floor((Math.random() * 3))];
  };

  this.defense = function () {
    return this.kicks[Math.floor((Math.random() * 3))];
  };
}