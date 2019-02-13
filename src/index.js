const Game = require("./game.js");

console.log("Webpack is working!");


document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();
  game.startScreen();
});

