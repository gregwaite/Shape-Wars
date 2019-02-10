const MovingObject = require("./moving_object.js");

class Enemy extends MovingObject {
  constructor(props) {
    super(props);
    this.down = true;
  }
  
  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
      this.ctx.moveTo(this.pos[0], this.pos[1]);
      this.ctx.lineTo((this.pos[0] + this.radius/2), (this.pos[1] + this.radius));
      this.ctx.lineTo((this.pos[0] - this.radius/2), (this.pos[1] + this.radius));
      this.ctx.fill();
    this.ctx.closePath();
  }
  // finalyBoss() {
  //   this.ctx.fillStyle = this.color;
  //   this.ctx.beginPath();
  
  //   this.ctx.closePath();
  // }
  // draw() {
  //   this.ctx.fillStyle = this.color;
  //   this.ctx.beginPath();
  //   this.ctx.fillRect(this.pos[0], this.pos[1], this.radius, this.radius);
  //   this.ctx.closePath();
  // }




}

module.exports = Enemy;