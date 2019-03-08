const MovingObject = require("./moving_object.js");
const Hurt = require("./hurt.js");
const Attack = require("./attack.js");

class Circle extends MovingObject {
  constructor(props) {
    super(props);
    this.attacking = false;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
      this.ctx.arc(
        this.pos[0],
        this.pos[1],
        this.radius,
        0,
        2 * Math.PI,
        false
      );
      this.ctx.fill();
    this.ctx.closePath();
  }

  stopMovement(key){
    if (key.code === "ArrowLeft" || key.code === "KeyA") {
      this.left = false;
      this.vel[0] = 0;
    } else if (key.code === "ArrowRight" || key.code === "KeyD") {
      this.right = false;
      this.vel[0] = 0;
    } else if (key.code === "ArrowUp" || key.code === "KeyW") {
      this.up = false;
      this.vel[1] = 0;
    } else if (key.code === "ArrowDown" || key.code === "KeyS") {
      this.down = false;
      this.vel[1] = 0;
    } else if (key.code === "Space") {
      this.attacking = false;
    }
  }

  handleKeypress(key) {
    if (key.code === "ArrowLeft" || key.code === "KeyA") {
      this.left = true;
    } else if (key.code === "ArrowRight" || key.code === "KeyD") {
      this.right = true;
    } else if (key.code === "ArrowUp" || key.code === "KeyW") {
      if (!this.game.started) {
        this.game.started = true;
        this.game.start();
      }
      this.up = true;
    } else if (key.code === "ArrowDown" || key.code === "KeyS") {
      this.down = true;
    } else if (key.code === "Enter" && this.game.started) {
      this.game.restart();
    } else if (key.code === "Space"){
      this.attacking = true;
    } else if (key.code === "Enter") {
      this.game.started = true;
      this.game.start();
    }
  }

  handleCollision(fleetObj, i) {
    if (this.gameOver()){
      this.game.gameOver = true;
    } else if (fleetObj.constructor.name === "Enemy") {
      this.radius -= 1;
      if (this.gameOver()) {
        this.game.gameOver = true;
      }
      this.damageAnimation();
    } else if (fleetObj.constructor.name === "Health") {
      delete this.game.health[0];
      this.game.healthCount += 1;
      this.radius += 4;
    }
  }

  damageAnimation() {
   let hurt = [];
    let diff;
    if (Math.floor(Math.random() * 2) === 0) {
      diff = 1;
    } else {
      diff = 5;
    }
    const hurtPos = [
      [this.pos[0] + diff, this.pos[1]],
      [this.pos[0] + diff, this.pos[1] + diff],
      [this.pos[0], this.pos[1] + diff],
      [this.pos[0] - diff, this.pos[1] + diff],
      [this.pos[0] - diff, this.pos[1]],
      [this.pos[0] - diff, this.pos[1] - diff],
      [this.pos[0], this.pos[1] - diff],
      [this.pos[0] + diff, this.pos[1] - diff],
    ];
    const directions = [
      "right",
      ["down", "right"],
      "down",
      ["down", "left"],
      "left",
      ["up", "left"],
      "up",
      ["up", "right"],

    ]
      for (let i = 0; i < 8; i++) {
        hurt.push(new Hurt({
          pos: hurtPos[i],
          vel: [0, 0],
          radius: 6,
          color: 'red',
          game: this.game,
          shape: 'circle',
        }));
      }
    hurt.forEach( (circ, i) => {
      circ.draw();
      if (directions[i] instanceof Array) {
        circ[directions[i][0]] = true;
        circ[directions[i][1]] = true;
      } else {
        circ[directions[i]] = true;
      }
      this.game.hurtCircs.push(circ);
    });
  }

  attack(){
    let attack = [];
    // let diff;
    // if (Math.floor(Math.random() * 2) === 0) {
    //   diff = 1;
    // } else {
    //   diff = 5;
    // }
    for (let i = 0; i < 1; i++) {
      if (this.game.attack.every(att => att.startPos - att.pos[1] > 120)){
          attack.push(new Attack({
          pos: [this.pos[0], this.pos[1] - this.radius],
          vel: [0, 0],
          radius: 7,
          color: 'white',
          game: this.game,
          startPos: this.pos[1],
        }));
      }
    }

    attack.forEach((circ) => {
      this.game.attack.push(circ);
    });
  }

  

  gameOver(){
    if (this.radius < 5) {
      return true;
    }
    return false;
  }

}

module.exports = Circle;