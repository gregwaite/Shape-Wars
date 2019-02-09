const MovingObject = require("./moving_object.js");

class Enemy extends MovingObject {
  constructor(props) {
    super(props);
    this.down = true;
  }

  draw() {
    this.drawRect();
  }




}

module.exports = Enemy;