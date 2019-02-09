/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/circle.js":
/*!***********************!*\
  !*** ./src/circle.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nclass Circle extends MovingObject {\n  constructor(props) {\n    super(props);\n  }\n\n  draw() {\n    this.drawCircle();\n  }\n\n  stopMovement(key){\n    if (key.code === \"ArrowLeft\" || key.code === \"KeyA\") {\n      this.left = false;\n      this.vel[0] = 0;\n    } else if (key.code === \"ArrowRight\" || key.code === \"KeyD\") {\n      this.right = false;\n      this.vel[0] = 0;\n    } else if (key.code === \"ArrowUp\" || key.code === \"KeyW\") {\n      this.up = false;\n      this.vel[1] = 0;\n    } else if (key.code === \"ArrowDown\" || key.code === \"KeyS\") {\n      this.down = false;\n      this.vel[1] = 0;\n    }\n  }\n\n  handleKeypress(key) {\n    if (key.code === \"ArrowLeft\" || key.code === \"KeyA\") {\n      this.left = true;\n    } else if (key.code === \"ArrowRight\" || key.code === \"KeyD\") {\n      this.right = true;\n    } else if (key.code === \"ArrowUp\" || key.code === \"KeyW\") {\n      this.up = true;\n    } else if (key.code === \"ArrowDown\" || key.code === \"KeyS\") {\n      this.down = true;\n    }\n  }\n\n}\n\nmodule.exports = Circle;\n\n//# sourceURL=webpack:///./src/circle.js?");

/***/ }),

/***/ "./src/enemy.js":
/*!**********************!*\
  !*** ./src/enemy.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nclass Enemy extends MovingObject {\n  constructor(props) {\n    super(props);\n    this.down = true;\n  }\n\n  draw() {\n    this.drawRect();\n  }\n\n\n\n\n}\n\nmodule.exports = Enemy;\n\n//# sourceURL=webpack:///./src/enemy.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Circle = __webpack_require__(/*! ./circle.js */ \"./src/circle.js\");\nconst Enemy = __webpack_require__(/*! ./enemy.js */ \"./src/enemy.js\");\n\nclass Game {\n  constructor() {\n    this.fleet = [];\n    this.circle = null;\n    this.canvas = document.getElementById('game-canvas');\n    this.ctx = this.canvas.getContext('2d');\n    this.draw = this.draw.bind(this);\n  }\n\n  start(){\n    this.enemyFactory(6);\n    this.player();\n    setInterval(this.draw, 10);\n  }\n\n  draw(){\n    this.ctx.clearRect(0, 0, 800, 600);\n    this.fleet.forEach(enemy => {\n      enemy.draw();\n    });\n    this.circle.draw();\n    this.circle.move();\n    this.moveFleetDown();\n  }\n\n  player(){\n    this.circle = new Circle({ pos: [400, 570], vel: [0,0], radius: 10, color: 'red' });\n    document.addEventListener(\"keydown\", (key) => {\n      this.circle.handleKeypress(key);\n    });\n    document.addEventListener(\"keyup\", (key) => {\n      this.circle.stopMovement(key);\n    });\n  }\n\n  enemyFactory(waveNum) {\n    let enemyPos = Math.floor(400 / waveNum);\n    let localFleet = [];\n    for (let i = 0; i < waveNum; i++) {\n      localFleet.push(new Enemy({ pos: [enemyPos, 40], vel: [0,0], radius: 30, color: 'blue' }));\n      enemyPos = enemyPos + Math.floor(800 / waveNum);\n    }\n    this.fleet = localFleet;\n  }\n\n  moveFleetDown() {\n    if (this.fleet[0].pos[1] < 595) {\n      this.fleet.forEach(enemy => {\n        if (Math.floor(Math.random() * 2) === 0) {\n          enemy.right = true;\n          enemy.left = false;\n        } else {\n          enemy.left = true;\n          enemy.right = false;\n        }\n        enemy.move();\n      });\n    } else {\n      this.enemyFactory(6);\n    }\n  }\n}\n\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nconsole.log(\"Webpack is working!\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const game = new Game();\n  game.start();\n});\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class MovingObject {\n\tconstructor(props) {\n\t\tthis.pos = props.pos;\n\t\tthis.vel = props.vel;\n\t\tthis.radius = props.radius;\n\t\tthis.color = props.color;\n\t\tthis.canvas = document.getElementById('game-canvas');\n\t\tthis.ctx = this.canvas.getContext('2d');\n\t\tthis.up = false;\n\t\tthis.down = false;\n\t\tthis.right = false;\n\t\tthis.left = false;\n\t\tthis.draw = this.draw.bind(this);\n\t}\n\n\tdrawCircle(){\n\t\tthis.ctx.fillStyle = this.color;\n\t\tthis.ctx.beginPath();\n\n\t\tthis.ctx.arc(\n\t\t\tthis.pos[0],\n\t\t\tthis.pos[1],\n\t\t\tthis.radius,\n\t\t\t0,\n\t\t\t2 * Math.PI,\n\t\t\tfalse\n\t\t);\n\t\tthis.ctx.fill();\n\t\tthis.ctx.closePath();\n\t}\n\n\tdrawRect() {\n\t\tthis.ctx.fillStyle = this.color;\n\t\tthis.ctx.beginPath();\n\t\tthis.ctx.fillRect(this.pos[0], this.pos[1], this.radius, this.radius);\n\t\tthis.ctx.closePath();\n\t}\n\n\tmove() {\n\t\tlet velocity;\n\t\tthis.checkIfInBounds();\n\t\tif (this.constructor.name === \"Enemy\") {\n\t\t\tvelocity = [1, 1];\n\t\t} else {\n\t\t\tvelocity = this.vel;\n\t\t}\n\t\tif (this.left) {\n\t\t\tthis.vel[0] += 0.3;\n\t\t\tthis.pos[0] -= velocity[0];\n\t\t} \n\t\tif (this.right) {\n\t\t\tthis.vel[0] += 0.3;\n\t\t\tthis.pos[0] += velocity[0];\n\t\t} \n\t\tif (this.down) {\n\t\t\tthis.vel[1] += 0.3;\n\t\t\tthis.pos[1] += velocity[1];\n\t\t} \n\t\tif (this.up) {\n\t\t\tthis.vel[1] += 0.3;\n\t\t\tthis.pos[1] -= velocity[1];\n\t\t}\n\t}\n\n\tcheckIfInBounds(){\n\t\tif (!this.inBoundsLeft()) {\n\t\t\tthis.left = false;\n\t\t} \n\t\tif (!this.inBoundsRight()) {\n\t\t\tthis.right = false;\n\t\t} \n\t\tif (!this.inBoundsDown()) {\n\t\t\tthis.down = false;\n\t\t} \n\t\tif (!this.inBoundsUp()) {\n\t\t\tthis.up = false;\n\t\t}\n\t}\n\n\tinBoundsRight(){\n\t\tif (this.pos[0] > this.canvas.width - 30) {\n\t\t\treturn false;\n\t\t}\n\t\treturn true;\n\t}\n\tinBoundsLeft() {\n\t\tif (this.pos[0] < 20) {\n\t\t\treturn false;\n\t\t}\n\t\treturn true;\n\t}\n\tinBoundsUp() {\n\t\tif (this.pos[1] < 20) {\n\t\t\treturn false;\n\t\t}\n\t\treturn true;\n\t}\n\tinBoundsDown() {\n\t\tif (this.pos[1] > this.canvas.height - 5) {\n\t\t\treturn false;\n\t\t}\n\t\treturn true;\n\t}\n}\n\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ })

/******/ });