const MovingObject = require("./moving_object.js");

class Health extends MovingObject {
  constructor(props) {
    super(props);
    this.radius = 20;
    this.color = "red";
    this.down = true;
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

module.exports = Health;