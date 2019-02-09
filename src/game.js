const Circle = require("./circle.js");
const Enemy = require("./enemy.js");

class Game {
  constructor() {
    this.fleet = [];
    this.circle = null;
    this.canvas = document.getElementById('game-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.draw = this.draw.bind(this);
  }

  start(){
    this.enemyFactory(10);
    this.player();
    setInterval(this.draw, 1);
  }

  draw(){
    this.ctx.clearRect(0, 0, 800, 600);
    this.fleet.forEach(enemy => {
      enemy.draw();
    });
    this.circle.draw();
    this.moveFleetDown();
  }

  player(){
    this.circle = new Circle({ pos: [400, 570], vel: 20, radius: 20, color: 'red' });
    document.addEventListener("keydown", (key) => {
      this.circle.handleKeypress(key);
    });
  }

  enemyFactory(waveNum) {
    let enemyPos = Math.floor(800 / waveNum);
    let localFleet = [];
    for (let i = 0; i < waveNum; i++) {
      localFleet.push(new Enemy({ pos: [enemyPos, 40], vel: 20, radius: 30, color: 'blue' }));
      enemyPos = enemyPos + Math.floor(800 / waveNum);
    }
    this.fleet = localFleet;
  }

  moveFleetDown() {
    if (this.fleet[0].pos[1] < 600) {
      this.fleet.forEach(enemy => {
        enemy.moveDown();
      });
    } else {
      this.enemyFactory(10);
    }
  }
}


module.exports = Game;