const MovingObject = require("./moving_object.js");

class Circle extends MovingObject {
  constructor(props) {
    super(props);
  }

  draw() {
    this.drawCircle();
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

}

module.exports = Circle;