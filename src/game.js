const Circle = require("./circle.js");
const Enemy = require("./enemy.js");
const Health = require("./health.js");

class Game {
  constructor() {
    this.fleet = [];
    this.circle = null;
    this.canvas = document.getElementById('game-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.draw = this.draw.bind(this);
    this.waveNum = 1;
    this.waveCount = 1;
    this.health = null;
    this.healthCount = 0;
  }

  start(){
    this.enemyFactory(6);
    this.player();
    this.health = [new Health({
      pos: [400, 50],
      vel: [0, 0],
      radius: 20,
      color: 'orange',
      game: this,
    })];
    setInterval(this.draw, 10);
  }

  draw(){
    this.ctx.clearRect(0, 0, 800, 600);
    this.collisionDetection();
    this.circle.draw();
    this.circle.move();
    if (this.healthCount < 3) {
      this.moveHealthDown();
      this.health[0].draw();
    } else if (this.waveNum < 3 && this.waveCount > 5){
      this.waveCount = 0;
      this.waveNum += 1;
      this.healthCount = 0;
    } else if (this.waveNum >= 3 && this.waveNum < 10 && this.waveCount > 10){
      this.waveCount = 0;
      this.waveNum += 1;
      this.healthCount = 0;
    } else if (this.waveNum >=10 && this.waveCount > 20){
      this.waveCount = 0;
      this.waveNum += 1;
      this.healthCount = 0;
    } else {
      this.fleet.forEach(enemy => {
        enemy.draw();
      });
      this.moveFleetDown();
    } 
  }

  player(){
    this.circle = new Circle({ pos: [400, 570], vel: [0,0], radius: 10, color: 'red', game: this});
    document.addEventListener("keydown", (key) => {
      this.circle.handleKeypress(key);
    });
    document.addEventListener("keyup", (key) => {
      this.circle.stopMovement(key);
    });
  }

  enemyFactory(waveNum) {
    let fleetObjPos = Math.floor(400 / waveNum);
    let localFleet = [];
    for (let i = 0; i < waveNum; i++) {
      localFleet.push(new Enemy({ pos: [fleetObjPos, 40], vel: [0, 0], radius: 30, color: 'blue', game: this }));
      fleetObjPos = fleetObjPos + Math.floor(800 / waveNum);

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
      this.waveCount += 1;
    }
  }

  moveHealthDown() {
    if (this.health[0] && this.health[0].pos[1] < 595) {
      this.health[0].move();
    } else if (!this.health[0]) {
      this.health = [new Health({
        pos: [400, 50],
        vel: [0, 0],
        radius: 20,
        color: 'orange',
        game: this,
      })];
    } else {
      this.healthCount += 1;
    }
  }

  collisionDetection(){
    this.fleet.forEach((fleetObj, i) => {
      let dx = this.circle.pos[0] - fleetObj.pos[0];
      let dy = this.circle.pos[1] - fleetObj.pos[1];
      let distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < this.circle.radius + fleetObj.radius - 4) {
        this.circle.handleCollision(fleetObj, i);
      }
    });
    this.health.forEach((fleetObj, i) => {
      let dx = this.circle.pos[0] - fleetObj.pos[0];
      let dy = this.circle.pos[1] - fleetObj.pos[1];
      let distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.circle.radius + fleetObj.radius) {
        this.circle.handleCollision(fleetObj, i);
      }
    });
  }
}


module.exports = Game;