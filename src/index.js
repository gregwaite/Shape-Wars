const MovingObject = require("./moving_object.js");

window.MovingObject = MovingObject;

console.log("Webpack is working!")


document.addEventListener("DOMContentLoaded", () => {
  const obj = new MovingObject({ pos: [200, 380], vel: 20, radius: 20, color: 'red' })
  obj.drawCircle();

  document.addEventListener("keydown", (key) => {
    obj.handleKeypress(key);
  });
});

