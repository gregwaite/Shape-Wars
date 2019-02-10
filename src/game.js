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
    this.gameOver = false;
  }

  start(){
    this.enemyFactory(6);
    this.player();
    this.health = [new Health({
      pos: [400, 50],
      vel: [0, 0],
      radius: 20,
      game: this,
    })];
    setInterval(this.draw, 10);
  }

  draw(){
    this.ctx.clearRect(0, 0, 800, 600);
    this.collisionDetection();
    this.circle.draw();
    this.circle.move();
    this.messages();
    if (this.healthCount < 3) {
      this.moveHealthDown();
      this.health[0].draw();
    } else {
      this.checkWaves();
    }
  }

  messages(){
    if (this.gameOver) {
      this.circle.ctx.font = "30px Helvetica";
      this.circle.ctx.strokeStyle = 'white';
      this.circle.ctx.strokeText("Game Over", (this.canvas.width / 2) + 50, this.canvas.height / 2);
      this.circle.ctx.font = "14px Helvetica";
      this.circle.ctx.fillStyle = 'white';
      this.circle.ctx.fillText(`You made it to wave ${this.waveNum}. Good job?`, this.canvas.width / 20, this.canvas.height / 2);
    } else if (this.healthCount === 0 && this.waveNum === 1 && this.waveCount === 1) {
      this.circle.ctx.font = "14px Helvetica";
      this.circle.ctx.fillStyle = 'white';
      this.circle.ctx.fillText("This is your family. Eat them to gain their courage", this.canvas.width / 20, this.canvas.height / 2);
    } else if (this.healthCount === 3 && this.waveNum === 1 && this.waveCount === 1) {
      this.circle.ctx.font = "14px Helvetica";
      this.circle.ctx.fillStyle = 'white';
      this.circle.ctx.fillText("Oh no! The triangles are attacking cause you're a cannibal!", this.canvas.width / 20, this.canvas.height / 2);
    } else if (this.healthCount === 3 && this.waveNum === 2 && this.waveCount === 1) {
      this.circle.ctx.font = "14px Helvetica";
      this.circle.ctx.fillStyle = 'white';
      this.circle.ctx.fillText("Oh no! The rectangles don't like cannibalism either!", this.canvas.width / 20, this.canvas.height / 2);
    } else if (this.healthCount === 3 && this.waveNum === 3) {
      this.circle.ctx.font = "14px Helvetica";
      this.circle.ctx.fillStyle = 'white';
      this.circle.ctx.fillText("Ahh! They're working together!", this.canvas.width / 20, this.canvas.height / 2);
    } else if (this.healthCount === 3 && this.waveNum === 4) {
      this.circle.ctx.font = "14px Helvetica";
      this.circle.ctx.fillStyle = 'white';
      this.circle.ctx.fillText("Looks like they're breeding!", this.canvas.width / 20, this.canvas.height / 2);
    } else if (this.healthCount === 3 && this.waveNum === 5) {
      this.circle.ctx.font = "14px Helvetica";
      this.circle.ctx.fillStyle = 'white';
      this.circle.ctx.fillText("Oh no, the whole family!", this.canvas.width / 20, this.canvas.height / 2);
    } else if (this.waveNum >= 10) {
      this.circle.ctx.font = "14px Helvetica";
      this.circle.ctx.fillStyle = 'white';
      this.circle.ctx.fillText("Well, we're boned", this.canvas.width / 20, this.canvas.height / 2);
    }
  }

  checkWaves(){
    if (this.waveNum < 4 && this.waveCount > 3) {
      this.waveCount = 1;
      this.waveNum += 1;
      this.healthCount = 0;
      this.enemyFactory(6)
    } else if (this.waveNum >= 4 && this.waveNum < 10 && this.waveCount > 5) {
      this.waveCount = 1;
      this.waveNum += 1;
      this.healthCount = 0;
      this.enemyFactory(6)
    } else if (this.waveNum >= 10 && this.waveCount > 20) {
      this.waveCount = 1;
      this.waveNum += 1;
      this.healthCount = 0;
      this.enemyFactory(6)
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

  enemyFactory(fleetCount) {
    let fleetObjPos = Math.floor(400 / fleetCount);
    let localFleet = [];
    for (let i = 0; i < fleetCount; i++) {
      let localShape;
      if (this.waveNum === 1) {
        localShape = 'tri';
      } else if (this.waveNum === 2){
        localShape = 'rect';
      } else if (this.waveNum === 3 && i % 2 === 0) {
        localShape = 'rect';
      } else if (this.waveNum === 3 && i % 2 === 1) {
        localShape = 'tri';
      } else if (this.waveNum === 4 || this.waveNum > 4 && (i === 0 || i === 3)) {
        localShape = 'pent';
      } else if (this.waveNum > 4 && (i === 2 || i === 5)) {
        localShape = 'tri';
      } else if (this.waveNum > 4 && (i === 1 || i === 4)) {
        localShape = 'rect';
      }
    
      localFleet.push(new Enemy({ pos: [fleetObjPos, 40], vel: [0, 0], radius: 30, color: 'blue', game: this, shape: localShape}));
      fleetObjPos = fleetObjPos + Math.floor(800 / fleetCount);

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
      this.waveCount += 1;
      this.enemyFactory(6);
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
      delete this.health[0];
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
    this.health.forEach((healthObj, i) => {
      let dx = this.circle.pos[0] - healthObj.pos[0];
      let dy = this.circle.pos[1] - healthObj.pos[1];
      let distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.circle.radius + healthObj.radius) {
        this.circle.handleCollision(healthObj, i);
      }
    });
  }
}


module.exports = Game;