const MovingObject = require("./moving_object.js");

class Attack extends MovingObject{
  constructor(props) {
    super(props);
    this.color = "white";
    this.up = true;
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

  handleCollision(fleetObj, iA, iF) {
    delete this.game.attack[iA];
    delete this.game.fleet[iF];
    fleetObj.enemyDamageAnimation();
  }
  



}

module.exports = Attack;