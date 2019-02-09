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
    this.enemyFactory(6);
    this.player();
    setInterval(this.draw, 10);
  }

  draw(){
    this.ctx.clearRect(0, 0, 800, 600);
    this.fleet.forEach(enemy => {
      enemy.draw();
    });
    this.circle.draw();
    this.circle.move();
    this.moveFleetDown();
  }

  player(){
    this.circle = new Circle({ pos: [400, 570], vel: [0,0], radius: 10, color: 'red' });
    document.addEventListener("keydown", (key) => {
      this.circle.handleKeypress(key);
    });
    document.addEventListener("keyup", (key) => {
      this.circle.stopMovement(key);
    });
  }

  enemyFactory(waveNum) {
    let enemyPos = Math.floor(400 / waveNum);
    let localFleet = [];
    for (let i = 0; i < waveNum; i++) {
      localFleet.push(new Enemy({ pos: [enemyPos, 40], vel: [0,0], radius: 30, color: 'blue' }));
      enemyPos = enemyPos + Math.floor(800 / waveNum);
    }
    this.fleet = localFleet;
  }

  moveFleetDown() {
    if (this.fleet[0].pos[1] < 595) {
      this.fleet.forEach(enemy => {
        if (Math.floor(Math.random() * 2) === 0) {
          enemy.right = true;
          enemy.left = false;
        } else {
          enemy.left = true;
          enemy.right = false;
        }
        enemy.move();
      });
    } else {
      this.enemyFactory(6);
    }
  }
}


module.exports = Game;