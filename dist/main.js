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

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nclass Circle extends MovingObject {\n  constructor(props) {\n    super(props);\n  }\n\n  draw() {\n    this.drawCircle();\n  }\n\n  handleKeypress(key) {\n    if (key.code === \"ArrowLeft\" || key.code === \"KeyA\") {\n      this.moveLeft();\n    } else if (key.code === \"ArrowRight\" || key.code === \"KeyD\") {\n      this.moveRight();\n    } else if (key.code === \"ArrowUp\" || key.code === \"KeyW\") {\n      this.moveUp();\n    } else if (key.code === \"ArrowDown\" || key.code === \"KeyS\") {\n      this.moveDown();\n    }\n  }\n\n}\n\nmodule.exports = Circle;\n\n//# sourceURL=webpack:///./src/circle.js?");

/***/ }),

/***/ "./src/enemy.js":
/*!**********************!*\
  !*** ./src/enemy.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nclass Enemy extends MovingObject {\n  constructor(props) {\n    super(props);\n  }\n\n  draw() {\n    this.drawRect();\n  }\n\n\n\n\n}\n\nmodule.exports = Enemy;\n\n//# sourceURL=webpack:///./src/enemy.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Circle = __webpack_require__(/*! ./circle.js */ \"./src/circle.js\");\nconst Enemy = __webpack_require__(/*! ./enemy.js */ \"./src/enemy.js\");\n\nclass Game {\n  constructor() {\n    this.fleet = [];\n    this.circle = null;\n    this.canvas = document.getElementById('game-canvas');\n    this.ctx = this.canvas.getContext('2d');\n    this.draw = this.draw.bind(this);\n  }\n\n  start(){\n    this.enemyFactory(10);\n    this.player();\n    requestAnimationFrame(this.draw);\n  }\n\n  draw(){\n    this.ctx.clearRect(0, 0, 800, 600);\n    this.fleet.forEach(enemy => {\n      enemy.draw();\n    });\n    this.circle.draw();\n    this.moveFleetDown();\n    requestAnimationFrame(this.draw);\n  }\n\n  player(){\n    this.circle = new Circle({ pos: [400, 570], vel: 20, radius: 20, color: 'red' });\n    document.addEventListener(\"keydown\", (key) => {\n      this.circle.handleKeypress(key);\n    });\n  }\n\n  enemyFactory(waveNum) {\n    let enemyPos = Math.floor(800 / waveNum);\n    for (let i = 0; i < waveNum; i++) {\n      this.fleet.push(new Enemy({ pos: [enemyPos, 40], vel: 20, radius: 30, color: 'blue' }));\n      enemyPos = enemyPos + Math.floor(800 / waveNum);\n    }\n  }\n\n  moveFleetDown() {\n    if (this.fleet[0].pos[1] < 600) {\n      this.fleet.forEach(enemy => {\n        enemy.moveDown();\n      });\n    }\n  }\n}\n\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

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

eval("class MovingObject {\n\tconstructor(props) {\n\t\tthis.pos = props.pos;\n\t\tthis.vel = props.vel;\n\t\tthis.radius = props.radius;\n\t\tthis.color = props.color;\n\t\tthis.canvas = document.getElementById('game-canvas');\n\t\tthis.ctx = this.canvas.getContext('2d');\n\t\tthis.draw = this.draw.bind(this);\n\t}\n\n\n\tdrawCircle(){\n\t\tthis.ctx.fillStyle = this.color;\n\t\tthis.ctx.beginPath();\n\n\t\tthis.ctx.arc(\n\t\t\tthis.pos[0],\n\t\t\tthis.pos[1],\n\t\t\tthis.radius,\n\t\t\t0,\n\t\t\t2 * Math.PI,\n\t\t\tfalse\n\t\t);\n\t\t\n\t\tthis.ctx.fill();\n\t}\n\n\tdrawRect() {\n\t\tthis.ctx.fillStyle = this.color;\n\t\tthis.ctx.beginPath();\n\t\tthis.ctx.fillRect(this.pos[0], this.pos[1], this.radius, this.radius);\n\t}\n\n\tmoveRight(){\n\t\tthis.pos[0] += 15;\n\t}\n\tmoveLeft(){\n\t\tthis.pos[0] -= 15;\n\t}\n\tmoveDown() {\n\t\tthis.pos[1] += 15;\n\t}\n\tmoveUp() {\n\t\tthis.pos[1] -= 15;\n\t}\n}\n\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ })

/******/ });