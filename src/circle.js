const MovingObject = require("./moving_object.js");

class Circle extends MovingObject {
  constructor(props) {
    super(props);
  }

  draw() {
    this.drawCircle();
  }

  handleKeypress(key) {
    if (key.code === "ArrowLeft" || key.code === "KeyA") {
      this.moveLeft();
    } else if (key.code === "ArrowRight" || key.code === "KeyD") {
      this.moveRight();
    } else if (key.code === "ArrowUp" || key.code === "KeyW") {
      this.moveUp();
    } else if (key.code === "ArrowDown" || key.code === "KeyS") {
      this.moveDown();
    }
  }

}

module.exports = Circle;