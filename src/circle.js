const MovingObject = require("./moving_object.js");
const Health = require("./health.js");

class Circle extends MovingObject {
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
    }
  }

  handleKeypress(key) {
    if (key.code === "ArrowLeft" || key.code === "KeyA") {
      this.left = true;
    } else if (key.code === "ArrowRight" || key.code === "KeyD") {
      this.right = true;
    } else if (key.code === "ArrowUp" || key.code === "KeyW") {
      this.up = true;
    } else if (key.code === "ArrowDown" || key.code === "KeyS") {
      this.down = true;
    }
  }

  handleCollision(fleetObj, i) {
    if (this.gameOver()){
      this.game.gameOver = true;
    } else if (fleetObj.constructor.name === "Enemy"){
      this.radius -= 0.5;
    } else if (fleetObj.constructor.name === "Health") {
      delete this.game.health[0];
      this.game.healthCount += 1;
      this.radius += 10;
    }
  }

  gameOver(){
    if (this.radius < 5) {
      return true;
    }
    return false;
  }

}

module.exports = Circle;