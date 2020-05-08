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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./audio/music.mp3":
/*!*************************!*\
  !*** ./audio/music.mp3 ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"audio/music.mp3\");\n\n//# sourceURL=webpack:///./audio/music.mp3?");

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"index.html\");\n\n//# sourceURL=webpack:///./index.html?");

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.ENEMY_SHOT_CHANCE = exports.PHASE_DURATION = exports.PLAYER_HP = exports.ENEMY_HP = exports.UPGRADE_POWER = exports.UPGRADE_SPAWN_CHANCE = exports.ENEMY_DIRECTION_REPEAT = exports.ENEMY_SPAWN_TIME = exports.ENEMY_BULLET_SPEED = exports.BULLET_SPEED = exports.ENEMY_SPEED = void 0;\nvar ENEMY_SPEED = 3;\nexports.ENEMY_SPEED = ENEMY_SPEED;\nvar BULLET_SPEED = 15;\nexports.BULLET_SPEED = BULLET_SPEED;\nvar ENEMY_BULLET_SPEED = 5;\nexports.ENEMY_BULLET_SPEED = ENEMY_BULLET_SPEED;\nvar ENEMY_SPAWN_TIME = 1500;\nexports.ENEMY_SPAWN_TIME = ENEMY_SPAWN_TIME;\nvar ENEMY_DIRECTION_REPEAT = 40;\nexports.ENEMY_DIRECTION_REPEAT = ENEMY_DIRECTION_REPEAT;\nvar UPGRADE_SPAWN_CHANCE = 15;\nexports.UPGRADE_SPAWN_CHANCE = UPGRADE_SPAWN_CHANCE;\nvar UPGRADE_POWER = 0.2;\nexports.UPGRADE_POWER = UPGRADE_POWER;\nvar ENEMY_HP = 4;\nexports.ENEMY_HP = ENEMY_HP;\nvar PLAYER_HP = 3;\nexports.PLAYER_HP = PLAYER_HP;\nvar PHASE_DURATION = 10000;\nexports.PHASE_DURATION = PHASE_DURATION;\nvar ENEMY_SHOT_CHANCE = 1;\nexports.ENEMY_SHOT_CHANCE = ENEMY_SHOT_CHANCE;\n\n//# sourceURL=webpack:///./src/constants/index.js?");

/***/ }),

/***/ "./src/controllers/audioController.js":
/*!********************************************!*\
  !*** ./src/controllers/audioController.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.AudioController = void 0;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar AudioController = /*#__PURE__*/function () {\n  function AudioController() {\n    var _this = this;\n\n    _classCallCheck(this, AudioController);\n\n    this.player = document.getElementById(\"myAudio\");\n    this.isPlaying = false;\n\n    window.togglePlay = function () {\n      _this.togglePlay();\n    };\n  }\n\n  _createClass(AudioController, [{\n    key: \"togglePlay\",\n    value: function togglePlay() {\n      if (this.isPlaying) {\n        this.player.pause();\n        document.getElementById(\"musicButton\").innerHTML = \"Switch Music On\";\n      } else {\n        this.player.play();\n        document.getElementById(\"musicButton\").innerHTML = \"Switch Music Off\";\n      }\n\n      this.isPlaying = !this.isPlaying;\n    }\n  }]);\n\n  return AudioController;\n}();\n\nexports.AudioController = AudioController;\n\n//# sourceURL=webpack:///./src/controllers/audioController.js?");

/***/ }),

/***/ "./src/controllers/bulletsController.js":
/*!**********************************************!*\
  !*** ./src/controllers/bulletsController.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.BulletsController = void 0;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar BulletsController = /*#__PURE__*/function () {\n  function BulletsController(shipWidth) {\n    _classCallCheck(this, BulletsController);\n\n    this.bullets = [];\n    this.bulletId = 0;\n    this.shipWidth = shipWidth;\n    var sizes = this.getBulletSizes();\n    this.bulletHeight = sizes.height;\n    this.bulletWidth = sizes.width;\n  }\n\n  _createClass(BulletsController, [{\n    key: \"createBullet\",\n    value: function createBullet(event) {\n      var bullet = document.createElement(\"div\");\n      bullet.classList.add(\"bullet\", \"undraggable\");\n      bullet.id = this.bulletId++;\n      bullet.y = event.y;\n      bullet.x = event.x + this.shipWidth / 2;\n      bullet.height = this.bulletHeight;\n      bullet.width = this.bulletWidth;\n      bullet.style.top = \"\".concat(bullet.y, \"px\");\n      bullet.style.left = \"\".concat(bullet.x, \"px\");\n      this.bullets.push(bullet);\n      document.getElementById(\"main\").appendChild(bullet);\n    }\n  }, {\n    key: \"removeBullet\",\n    value: function removeBullet(bullet) {\n      this.bullets.splice(this.bullets.findIndex(function (obj) {\n        return obj.id === bullet.id;\n      }), 1);\n      bullet.remove();\n    }\n  }, {\n    key: \"getBulletSizes\",\n    value: function getBulletSizes() {\n      var bullet = document.createElement(\"div\");\n      bullet.classList.add(\"bullet\");\n      document.getElementById(\"main\").appendChild(bullet);\n      var sizes = {\n        width: bullet.offsetWidth,\n        height: bullet.offsetHeight\n      };\n      bullet.remove();\n      return sizes;\n    }\n  }]);\n\n  return BulletsController;\n}();\n\nexports.BulletsController = BulletsController;\n\n//# sourceURL=webpack:///./src/controllers/bulletsController.js?");

/***/ }),

/***/ "./src/controllers/enemiesController.js":
/*!**********************************************!*\
  !*** ./src/controllers/enemiesController.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.EnemiesController = void 0;\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n\nvar _enums = __webpack_require__(/*! ../enums */ \"./src/enums/index.js\");\n\nvar _constants = __webpack_require__(/*! ../constants */ \"./src/constants/index.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar EnemiesController = /*#__PURE__*/function () {\n  function EnemiesController(windowInnerHeight, windowInnerWidth) {\n    _classCallCheck(this, EnemiesController);\n\n    this.enemies = [];\n    this.enemyId = 0;\n    this.bullets = [];\n    this.bulletId = 0;\n    this.windowInnerHeight = windowInnerHeight;\n    this.windowInnerWidth = windowInnerWidth;\n    var enemySizes = this.getEnemySizes();\n    this.enemyHeight = enemySizes.height;\n    this.enemyWidth = enemySizes.width;\n    var bulletSizes = this.getBulletSizes();\n    this.bulletHeight = bulletSizes.height;\n    this.bulletWidth = bulletSizes.width;\n  }\n\n  _createClass(EnemiesController, [{\n    key: \"spawnEnemy\",\n    value: function spawnEnemy() {\n      var enemy = document.createElement(\"div\");\n      enemy.classList.add(\"enemy\", \"progress\");\n      enemy.setAttribute(\"hp\", _constants.ENEMY_HP);\n      enemy.setAttribute(\"max-hp\", _constants.ENEMY_HP);\n      enemy.id = this.enemyId++;\n      enemy.y = (0, _utils.getRandomInteger)(this.enemyHeight / 2, this.windowInnerHeight - this.enemyHeight / 2);\n      enemy.x = this.windowInnerWidth;\n      enemy.height = this.enemyHeight;\n      enemy.width = this.enemyWidth;\n      enemy.style.top = \"\".concat(enemy.y, \"px\");\n      enemy.style.left = \"\".concat(enemy.x, \"px\");\n      this.enemies.push(enemy);\n      enemy.appendChild(this.createHpBar());\n      document.getElementById(\"main\").appendChild(enemy);\n    }\n  }, {\n    key: \"createEnemyBullet\",\n    value: function createEnemyBullet(enemy) {\n      var bullet = document.createElement(\"div\");\n      bullet.classList.add(\"enemyBullet\", \"undraggable\");\n      bullet.id = this.bulletId++;\n      bullet.y = enemy.y;\n      bullet.x = enemy.x - this.enemyWidth / 2;\n      bullet.height = this.bulletHeight;\n      bullet.width = this.bulletWidth;\n      bullet.style.top = \"\".concat(bullet.y, \"px\");\n      bullet.style.left = \"\".concat(bullet.x, \"px\");\n      this.bullets.push(bullet);\n      document.getElementById(\"main\").appendChild(bullet);\n    }\n  }, {\n    key: \"removeEnemyBullet\",\n    value: function removeEnemyBullet(bullet) {\n      this.bullets.splice(this.bullets.findIndex(function (obj) {\n        return obj.id === bullet.id;\n      }), 1);\n      bullet.remove();\n    }\n  }, {\n    key: \"getBulletSizes\",\n    value: function getBulletSizes() {\n      var bullet = document.createElement(\"div\");\n      bullet.classList.add(\"enemyBullet\");\n      document.getElementById(\"main\").appendChild(bullet);\n      var sizes = {\n        width: bullet.offsetWidth,\n        height: bullet.offsetHeight\n      };\n      bullet.remove();\n      return sizes;\n    }\n  }, {\n    key: \"getEnemySizes\",\n    value: function getEnemySizes() {\n      var enemy = document.createElement(\"div\");\n      enemy.classList.add(\"enemy\");\n      document.getElementById(\"main\").appendChild(enemy);\n      var sizes = {\n        width: enemy.offsetWidth,\n        height: enemy.offsetHeight\n      };\n      enemy.remove();\n      return sizes;\n    }\n  }, {\n    key: \"createHpBar\",\n    value: function createHpBar() {\n      var enemyHpBar = document.createElement(\"div\");\n      enemyHpBar.setAttribute(\"role\", \"progressbar\");\n      enemyHpBar.setAttribute(\"aria-valuenow\", \"100\");\n      enemyHpBar.setAttribute(\"aria-valuemin\", \"0\");\n      enemyHpBar.setAttribute(\"aria-valuemax\", \"100\");\n      enemyHpBar.setAttribute(\"style\", \"width: 100%;\");\n      enemyHpBar.classList.add(\"progress-bar\", \"progress-bar-success\");\n      return enemyHpBar;\n    }\n  }, {\n    key: \"handleEnemyMove\",\n    value: function handleEnemyMove(enemy, frameNumber) {\n      // if (frameNumber % 2 === 0) {\n      if (!enemy.getAttribute(\"direction\")) {\n        (0, _utils.move)(enemy, _enums.Direction.LEFT, _constants.ENEMY_SPEED);\n        enemy.setAttribute(\"direction\", _enums.Direction.LEFT);\n      } else if (frameNumber % _constants.ENEMY_DIRECTION_REPEAT === 0) {\n        var directions = [_enums.Direction.LEFT, _enums.Direction.TOP, _enums.Direction.DOWN];\n\n        if (enemy.y < window.innerHeight * 0.3) {\n          directions.splice(directions.indexOf(_enums.Direction.TOP), 1);\n        } else if (enemy.y > window.innerHeight - window.innerHeight * 0.3) {\n          directions.splice(directions.indexOf(_enums.Direction.DOWN), 1);\n        }\n\n        var direction = directions[(0, _utils.getRandomInteger)(0, directions.length - 1)];\n        (0, _utils.move)(enemy, direction, _constants.ENEMY_SPEED);\n        enemy.setAttribute(\"direction\", direction);\n      } else {\n        (0, _utils.move)(enemy, enemy.getAttribute(\"direction\"), _constants.ENEMY_SPEED);\n      }\n\n      var possibility = (0, _utils.getRandomInteger)(1, 300);\n\n      if (possibility <= _constants.ENEMY_SHOT_CHANCE) {\n        this.createEnemyBullet(enemy);\n      }\n    }\n  }, {\n    key: \"isEnemyKilled\",\n    value: function isEnemyKilled(enemy, weaponPower) {\n      var maxEnemyHP = enemy.getAttribute(\"max-hp\");\n      var currentEnemyHP = enemy.getAttribute(\"hp\") - weaponPower;\n      enemy.setAttribute(\"hp\", currentEnemyHP);\n\n      if (currentEnemyHP <= 0) {\n        this.handleEnemyKill(enemy);\n        return true;\n      }\n\n      enemy.firstElementChild.setAttribute(\"aria-valuenow\", String(currentEnemyHP / maxEnemyHP));\n      enemy.firstElementChild.style.width = \"\".concat(currentEnemyHP / maxEnemyHP * 100, \"%\");\n      return false;\n    }\n  }, {\n    key: \"handleEnemyKill\",\n    value: function handleEnemyKill(enemy) {\n      enemy.firstElementChild.remove();\n      this.removeEnemy(enemy);\n      enemy.classList.remove(\"enemy\");\n      enemy.classList.add(\"explosion\");\n      var possibility = (0, _utils.getRandomInteger)(1, 100);\n\n      if (possibility <= _constants.UPGRADE_SPAWN_CHANCE) {\n        setTimeout(function () {\n          enemy.classList.remove(\"explosion\");\n          enemy.classList.add(\"upgrade\");\n          setTimeout(function () {\n            return enemy.remove();\n          }, 5000);\n        }, 500);\n      } else {\n        setTimeout(function () {\n          return enemy.remove();\n        }, 1000);\n      }\n    }\n  }, {\n    key: \"removeEnemy\",\n    value: function removeEnemy(enemy) {\n      this.enemies.splice(this.enemies.findIndex(function (obj) {\n        return obj.id === enemy.id;\n      }), 1);\n    }\n  }]);\n\n  return EnemiesController;\n}();\n\nexports.EnemiesController = EnemiesController;\n\n//# sourceURL=webpack:///./src/controllers/enemiesController.js?");

/***/ }),

/***/ "./src/controllers/gameController.js":
/*!*******************************************!*\
  !*** ./src/controllers/gameController.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.GameController = void 0;\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n\nvar _index = __webpack_require__(/*! ./index */ \"./src/controllers/index.js\");\n\nvar _enums = __webpack_require__(/*! ../enums */ \"./src/enums/index.js\");\n\nvar _constants = __webpack_require__(/*! ../constants */ \"./src/constants/index.js\");\n\nfunction _createForOfIteratorHelper(o) { if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar GameController = /*#__PURE__*/function () {\n  function GameController() {\n    _classCallCheck(this, GameController);\n\n    this.windowInnerHeight = 0;\n    this.windowInnerWidth = 0;\n    this.playerController = null;\n    this.enemiesController = null;\n    this.bulletsController = null;\n    this.audioController = new _index.AudioController();\n    this.isGameRunning = false;\n    this.frameNumber = 0;\n    this.currentPhase = 1;\n    this.spawnIntervalId = null;\n    this.changePhaseIntervalId = null;\n  }\n\n  _createClass(GameController, [{\n    key: \"initState\",\n    value: function initState() {\n      this.windowInnerHeight = window.innerHeight;\n      this.windowInnerWidth = window.innerWidth;\n      this.playerController = new _index.PlayerController();\n      this.enemiesController = new _index.EnemiesController(this.windowInnerHeight, this.windowInnerWidth);\n      this.bulletsController = new _index.BulletsController(this.playerController.ship.width);\n      this.frameNumber = 0;\n      this.currentPhase = 1;\n      (0, _utils.updateCurrentPhase)(this.currentPhase);\n    }\n  }, {\n    key: \"startGame\",\n    value: function startGame(click) {\n      this.initState();\n      this.playerController.shipTrack(click);\n      (0, _utils.hideGameOver)();\n      (0, _utils.hideMenu)();\n      (0, _utils.hideCursor)();\n      this.addEventListeners();\n\n      if (!this.isGameRunning) {\n        this.update();\n        this.isGameRunning = true;\n      } // this.enemiesController.spawnEnemy();\n\n\n      this.startSpawningEnemies();\n    }\n  }, {\n    key: \"startSpawningEnemies\",\n    value: function startSpawningEnemies() {\n      var _this = this;\n\n      this.spawnIntervalId = setInterval(function () {\n        return _this.enemiesController.spawnEnemy();\n      }, _constants.ENEMY_SPAWN_TIME);\n      this.changePhaseIntervalId = setInterval(function () {\n        _this.currentPhase++;\n        (0, _utils.updateCurrentPhase)(_this.currentPhase);\n\n        _this.decreaseEnemySpawnTime();\n      }, _constants.PHASE_DURATION);\n    }\n  }, {\n    key: \"addEventListeners\",\n    value: function addEventListeners() {\n      var _this2 = this;\n\n      this.fireListener = function (event) {\n        return _this2.bulletsController.createBullet(event);\n      };\n\n      this.moveListener = function (event) {\n        return _this2.playerController.shipTrack(event);\n      };\n\n      window.addEventListener(\"click\", this.fireListener, true);\n      window.addEventListener(\"mousemove\", this.moveListener);\n    }\n  }, {\n    key: \"removeEventListeners\",\n    value: function removeEventListeners() {\n      window.removeEventListener(\"click\", this.fireListener, true);\n      window.removeEventListener(\"mousemove\", this.moveListener);\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      var _this3 = this;\n\n      this.handleEnemies();\n      this.handleBullets();\n      this.handleEnemyBullets();\n      this.handleUpgrades();\n      window.requestAnimationFrame(function () {\n        return _this3.update();\n      });\n    }\n  }, {\n    key: \"decreaseEnemySpawnTime\",\n    value: function decreaseEnemySpawnTime() {\n      var _this4 = this;\n\n      clearInterval(this.spawnIntervalId);\n      this.spawnIntervalId = setInterval(function () {\n        return _this4.enemiesController.spawnEnemy();\n      }, _constants.ENEMY_SPAWN_TIME / (1 + 0.3 * this.currentPhase));\n    }\n  }, {\n    key: \"handleEnemies\",\n    value: function handleEnemies() {\n      var _iterator = _createForOfIteratorHelper(this.enemiesController.enemies),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var enemy = _step.value;\n          this.enemiesController.handleEnemyMove(enemy, this.frameNumber);\n\n          if (enemy.x < 0) {\n            this.playerController.decreaseCurrentHp();\n            this.enemiesController.removeEnemy(enemy);\n            enemy.remove();\n          }\n\n          if ((0, _utils.isCollision)(this.playerController.ship, enemy)) {\n            this.playerController.decreaseCurrentHp();\n            this.enemiesController.handleEnemyKill(enemy);\n          }\n\n          if (this.playerController.currentHp === 0) {\n            this.gameOver();\n            return;\n          }\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      this.frameNumber++;\n    }\n  }, {\n    key: \"handleBullets\",\n    value: function handleBullets() {\n      var _iterator2 = _createForOfIteratorHelper(this.bulletsController.bullets),\n          _step2;\n\n      try {\n        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n          var bullet = _step2.value;\n          (0, _utils.move)(bullet, _enums.Direction.RIGHT, this.playerController.weapon.speed);\n\n          var _iterator3 = _createForOfIteratorHelper(this.enemiesController.enemies),\n              _step3;\n\n          try {\n            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n              var enemy = _step3.value;\n\n              if ((0, _utils.isCollision)(enemy, bullet)) {\n                this.bulletsController.removeBullet(bullet);\n\n                if (this.enemiesController.isEnemyKilled(enemy, this.playerController.weapon.power)) {\n                  this.playerController.increaseKillCount();\n                }\n\n                return;\n              }\n            }\n          } catch (err) {\n            _iterator3.e(err);\n          } finally {\n            _iterator3.f();\n          }\n\n          if (!(0, _utils.isElementWithinScreen)(bullet, this.windowInnerHeight, this.windowInnerWidth)) {\n            this.bulletsController.removeBullet(bullet);\n          }\n        }\n      } catch (err) {\n        _iterator2.e(err);\n      } finally {\n        _iterator2.f();\n      }\n    }\n  }, {\n    key: \"handleEnemyBullets\",\n    value: function handleEnemyBullets() {\n      var _iterator4 = _createForOfIteratorHelper(this.enemiesController.bullets),\n          _step4;\n\n      try {\n        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {\n          var bullet = _step4.value;\n          (0, _utils.move)(bullet, _enums.Direction.LEFT, _constants.ENEMY_BULLET_SPEED);\n\n          if ((0, _utils.isCollision)(this.playerController.ship, bullet)) {\n            this.playerController.decreaseCurrentHp();\n            this.enemiesController.removeEnemyBullet(bullet);\n\n            if (this.playerController.currentHp === 0) {\n              this.gameOver();\n              return;\n            }\n          }\n\n          if (!(0, _utils.isElementWithinScreen)(bullet, this.windowInnerHeight, this.windowInnerWidth)) {\n            this.enemiesController.removeEnemyBullet(bullet);\n          }\n        }\n      } catch (err) {\n        _iterator4.e(err);\n      } finally {\n        _iterator4.f();\n      }\n    }\n  }, {\n    key: \"handleUpgrades\",\n    value: function handleUpgrades() {\n      var upgrades = document.getElementsByClassName(\"upgrade\");\n\n      var _iterator5 = _createForOfIteratorHelper(upgrades),\n          _step5;\n\n      try {\n        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {\n          var upgrade = _step5.value;\n\n          if ((0, _utils.isCollision)(upgrade, this.playerController.ship)) {\n            this.playerController.increaseWeaponLevel();\n            upgrade.remove();\n          }\n        }\n      } catch (err) {\n        _iterator5.e(err);\n      } finally {\n        _iterator5.f();\n      }\n    }\n  }, {\n    key: \"gameOver\",\n    value: function gameOver() {\n      (0, _utils.hideShip)();\n      this.removeEventListeners();\n      this.stopSpawningEnemies();\n      this.removeAllElementsFromHtml();\n      (0, _utils.changeStartButtonToFlyAgain)();\n      (0, _utils.showGameOver)();\n      (0, _utils.showMenu)();\n      (0, _utils.showCursor)();\n    }\n  }, {\n    key: \"stopSpawningEnemies\",\n    value: function stopSpawningEnemies() {\n      clearInterval(this.spawnIntervalId);\n      clearInterval(this.changePhaseIntervalId);\n    }\n  }, {\n    key: \"removeAllElementsFromHtml\",\n    value: function removeAllElementsFromHtml() {\n      Array.from(this.enemiesController.enemies).forEach(function (enemy) {\n        return enemy.remove();\n      });\n      this.enemiesController.enemies = [];\n      Array.from(this.bulletsController.bullets).forEach(function (bullet) {\n        return bullet.remove();\n      });\n      Array.from(this.enemiesController.bullets).forEach(function (bullet) {\n        return bullet.remove();\n      });\n      setTimeout(function () {\n        var upgrades = document.getElementsByClassName(\"upgrade\");\n        Array.from(upgrades).forEach(function (upgrade) {\n          return upgrade.remove();\n        });\n      }, 500);\n    }\n  }]);\n\n  return GameController;\n}();\n\nexports.GameController = GameController;\n\n//# sourceURL=webpack:///./src/controllers/gameController.js?");

/***/ }),

/***/ "./src/controllers/index.js":
/*!**********************************!*\
  !*** ./src/controllers/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nObject.defineProperty(exports, \"GameController\", {\n  enumerable: true,\n  get: function get() {\n    return _gameController.GameController;\n  }\n});\nObject.defineProperty(exports, \"EnemiesController\", {\n  enumerable: true,\n  get: function get() {\n    return _enemiesController.EnemiesController;\n  }\n});\nObject.defineProperty(exports, \"PlayerController\", {\n  enumerable: true,\n  get: function get() {\n    return _playerController.PlayerController;\n  }\n});\nObject.defineProperty(exports, \"BulletsController\", {\n  enumerable: true,\n  get: function get() {\n    return _bulletsController.BulletsController;\n  }\n});\nObject.defineProperty(exports, \"AudioController\", {\n  enumerable: true,\n  get: function get() {\n    return _audioController.AudioController;\n  }\n});\n\nvar _gameController = __webpack_require__(/*! ./gameController */ \"./src/controllers/gameController.js\");\n\nvar _enemiesController = __webpack_require__(/*! ./enemiesController */ \"./src/controllers/enemiesController.js\");\n\nvar _playerController = __webpack_require__(/*! ./playerController */ \"./src/controllers/playerController.js\");\n\nvar _bulletsController = __webpack_require__(/*! ./bulletsController */ \"./src/controllers/bulletsController.js\");\n\nvar _audioController = __webpack_require__(/*! ./audioController */ \"./src/controllers/audioController.js\");\n\n//# sourceURL=webpack:///./src/controllers/index.js?");

/***/ }),

/***/ "./src/controllers/playerController.js":
/*!*********************************************!*\
  !*** ./src/controllers/playerController.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.PlayerController = void 0;\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n\nvar _constants = __webpack_require__(/*! ../constants */ \"./src/constants/index.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar PlayerController = /*#__PURE__*/function () {\n  function PlayerController() {\n    _classCallCheck(this, PlayerController);\n\n    this.ship = document.getElementById(\"ship\");\n    (0, _utils.showShip)();\n    this.ship.height = this.ship.offsetHeight;\n    this.ship.width = this.ship.offsetWidth;\n    this.currentHp = _constants.PLAYER_HP;\n    this.weapon = {\n      level: 1,\n      power: 1,\n      speed: _constants.BULLET_SPEED\n    };\n    this.stats = {\n      shotEnemies: 0\n    };\n    (0, _utils.updateHp)(this.currentHp);\n    (0, _utils.updateWeaponPower)(this.weapon.power);\n    (0, _utils.updateKillCount)(this.stats.shotEnemies);\n  }\n\n  _createClass(PlayerController, [{\n    key: \"shipTrack\",\n    value: function shipTrack(event) {\n      this.ship.y = event.clientY;\n      this.ship.x = event.clientX;\n      this.ship.style.top = \"\".concat(this.ship.y, \"px\");\n      this.ship.style.left = \"\".concat(this.ship.x, \"px\");\n    }\n  }, {\n    key: \"increaseWeaponLevel\",\n    value: function increaseWeaponLevel() {\n      this.weapon.level++;\n      this.weapon.power += _constants.UPGRADE_POWER;\n      this.weapon.speed++;\n      (0, _utils.updateWeaponPower)(this.weapon.level);\n    }\n  }, {\n    key: \"increaseKillCount\",\n    value: function increaseKillCount() {\n      this.stats.shotEnemies++;\n      (0, _utils.updateKillCount)(this.stats.shotEnemies);\n    }\n  }, {\n    key: \"decreaseCurrentHp\",\n    value: function decreaseCurrentHp() {\n      this.currentHp--;\n      (0, _utils.updateHp)(this.currentHp);\n    }\n  }]);\n\n  return PlayerController;\n}();\n\nexports.PlayerController = PlayerController;\n\n//# sourceURL=webpack:///./src/controllers/playerController.js?");

/***/ }),

/***/ "./src/enums/directionEnum.js":
/*!************************************!*\
  !*** ./src/enums/directionEnum.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Direction = void 0;\nvar Direction = {\n  LEFT: \"left\",\n  RIGHT: \"right\",\n  DOWN: \"down\",\n  TOP: \"top\"\n};\nexports.Direction = Direction;\n\n//# sourceURL=webpack:///./src/enums/directionEnum.js?");

/***/ }),

/***/ "./src/enums/index.js":
/*!****************************!*\
  !*** ./src/enums/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _directionEnum = __webpack_require__(/*! ./directionEnum */ \"./src/enums/directionEnum.js\");\n\nObject.keys(_directionEnum).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _directionEnum[key];\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/enums/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../style.scss */ \"./style.scss\");\n\n__webpack_require__(/*! ../index.html */ \"./index.html\");\n\n__webpack_require__(/*! ../audio/music.mp3 */ \"./audio/music.mp3\");\n\nvar _gameController = __webpack_require__(/*! ./controllers/gameController */ \"./src/controllers/gameController.js\");\n\nwindow.startGame = function (event) {\n  window.gameController.startGame(event);\n};\n\nwindow.onload = function () {\n  window.gameController = new _gameController.GameController();\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./src/utils/utils.js\");\n\nObject.keys(_utils).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _utils[key];\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/utils/index.js?");

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.isCollision = isCollision;\nexports.isElementWithinScreen = isElementWithinScreen;\nexports.updateHp = updateHp;\nexports.updateKillCount = updateKillCount;\nexports.updateWeaponPower = updateWeaponPower;\nexports.updateCurrentPhase = updateCurrentPhase;\nexports.move = move;\nexports.getRandomInteger = getRandomInteger;\nexports.changeStartButtonToFlyAgain = changeStartButtonToFlyAgain;\nexports.showMenu = showMenu;\nexports.hideMenu = hideMenu;\nexports.showGameOver = showGameOver;\nexports.hideGameOver = hideGameOver;\nexports.hideCursor = hideCursor;\nexports.showCursor = showCursor;\nexports.showShip = showShip;\nexports.hideShip = hideShip;\n\nvar _enums = __webpack_require__(/*! ../enums */ \"./src/enums/index.js\");\n\nfunction isCollision(element1, element2) {\n  return !(Math.abs(element1.x - element2.x) > (element1.width / 2 + element2.width / 2) / 2 || Math.abs(element1.y - element2.y) > (element1.height / 2 + element2.height / 2) / 2);\n}\n\nfunction isElementWithinScreen(element, windowInnerHeight, windowInnerWidth) {\n  if (element.x > windowInnerWidth || element.x < 0 || element.y > windowInnerHeight || element.y < 0) {\n    return false;\n  }\n\n  return true;\n}\n\nfunction updateHp(value) {\n  var currentHpDiv = document.getElementById(\"current-hp\");\n  currentHpDiv.innerHTML = \"\";\n\n  for (var i = 0; i < value; i++) {\n    var ship = document.createElement(\"div\");\n    ship.classList.add(\"hp-unit\");\n    currentHpDiv.appendChild(ship);\n  }\n}\n\nfunction updateKillCount(value) {\n  document.getElementById(\"killCount\").innerText = value;\n}\n\nfunction updateWeaponPower(value) {\n  document.getElementById(\"weaponLevel\").innerText = value;\n}\n\nfunction updateCurrentPhase(value) {\n  document.getElementById(\"currentPhase\").innerText = value;\n}\n\nfunction move(element, direction, distance) {\n  switch (direction) {\n    case _enums.Direction.LEFT:\n      element.x -= distance;\n      element.style.left = \"\".concat(element.x, \"px\");\n      break;\n\n    case _enums.Direction.RIGHT:\n      element.x += distance;\n      element.style.left = \"\".concat(element.x, \"px\");\n      break;\n\n    case _enums.Direction.TOP:\n      element.y -= distance;\n      element.style.top = \"\".concat(element.y, \"px\");\n      break;\n\n    case _enums.Direction.DOWN:\n      element.y += distance;\n      element.style.top = \"\".concat(element.y, \"px\");\n      break;\n  }\n}\n\nfunction getRandomInteger(min, max) {\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n}\n\nfunction changeStartButtonToFlyAgain() {\n  document.getElementById(\"startButton\").innerText = \"Fly Again!\";\n}\n\nfunction showMenu() {\n  document.getElementById(\"menu\").style.display = \"grid\";\n}\n\nfunction hideMenu() {\n  document.getElementById(\"menu\").style.display = \"none\";\n}\n\nfunction showGameOver() {\n  document.getElementById(\"game-over\").style.display = \"block\";\n}\n\nfunction hideGameOver() {\n  document.getElementById(\"game-over\").style.display = \"none\";\n}\n\nfunction hideCursor() {\n  document.getElementById(\"main\").style.cursor = \"none\";\n}\n\nfunction showCursor() {\n  document.getElementById(\"main\").style.cursor = \"auto\";\n}\n\nfunction showShip() {\n  document.getElementById(\"ship\").style.display = \"block\";\n}\n\nfunction hideShip() {\n  document.getElementById(\"ship\").style.display = \"none\";\n}\n\n//# sourceURL=webpack:///./src/utils/utils.js?");

/***/ }),

/***/ "./style.scss":
/*!********************!*\
  !*** ./style.scss ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./style.scss?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ })

/******/ });