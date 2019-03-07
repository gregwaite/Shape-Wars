const MovingObject = require("./moving_object.js");
const Hurt = require("./hurt.js");

class Enemy extends MovingObject {
  constructor(props) {
    super(props);
    this.down = true;
  }
  
  draw() {
    if (this.shape === "rect") {
      this.color = 'blue';
      this.drawRect();
    } else if (this.shape === "tri") {
      this.color = 'yellow';
      this.drawTri();
    } else if (this.shape === "pent") {
      this.color = '#25fd03';
      this.drawPent();
    }
  }
  drawTri(){
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
      this.ctx.moveTo(this.pos[0], this.pos[1]);
      this.ctx.lineTo((this.pos[0] + this.radius/2), (this.pos[1] + this.radius));
      this.ctx.lineTo((this.pos[0] - this.radius/2), (this.pos[1] + this.radius));
      this.ctx.fill();
    this.ctx.closePath();
  }
  drawRect() {
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.fillRect(this.pos[0], this.pos[1], this.radius, this.radius);
    this.ctx.closePath();
  }
  pentagon(x, y, radius, rotation) {
    for (var i = 0; i < 5; i++) {
      const ang = (i / 5) * Math.PI * 2 + rotation;
      this.ctx.lineTo(
        Math.cos(ang) * radius + x,
        Math.sin(ang) * radius + y
      );
    }
    this.ctx.fill();
    this.ctx.closePath();
  }
  drawPent() {
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.pentagon(this.pos[0], this.pos[1], 20, -Math.PI / 2);
    this.ctx.stroke();
  }

  enemyDamageAnimation() {
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
        radius: 10,
        color: 'red',
        game: this.game,
        shape: this.shape
      }));
    }
    hurt.forEach((circ, i) => {
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

}

module.exports = Enemy;