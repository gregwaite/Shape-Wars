const MovingObject = require("./moving_object.js");


class Hurt extends MovingObject {
  constructor(props) {
    super(props);
  }

  
  draw() {
    if (this.shape === "circle"){
      this.color = 'red';
      this.drawCircle();
    }else if (this.shape === "rect") {
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
  drawCircle() {
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
  drawTri() {
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.moveTo(this.pos[0], this.pos[1]);
    this.ctx.lineTo((this.pos[0] + this.radius / 2), (this.pos[1] + this.radius));
    this.ctx.lineTo((this.pos[0] - this.radius / 2), (this.pos[1] + this.radius));
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
    this.pentagon(this.pos[0], this.pos[1], this.radius/2, -Math.PI / 2);
    this.ctx.stroke();
  }

}

module.exports = Hurt;