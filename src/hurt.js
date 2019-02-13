const MovingObject = require("./moving_object.js");


class Hurt extends MovingObject {
  constructor(props) {
    super(props);
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

}

module.exports = Hurt;