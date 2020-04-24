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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../style.scss */ \"./style.scss\");\n\nvar _utils = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _createForOfIteratorHelper(o) { if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar ENEMY_SPEED = 5;\nvar BULLET_SPEED = 10;\nvar ENEMY_SPAWN_TIME = 1500;\nvar ENEMY_DIRECTION_REPEAT = 40;\nvar UPGRADE_SPAWN_CHANCE = 30;\nvar ENEMY_HP = 3;\nvar PLAYER_HP = 3;\nvar UPGRADE_SPAWN_RATE = 3;\nvar spawnIntervalId;\nvar isGameRunning = false;\nvar frameNumber = 0;\nvar intervalCycle = 0;\nvar resetIntervalId;\nvar state = {\n  weaponPower: null,\n  currentPlayerHp: null\n};\nvar Direction = {\n  LEFT: \"left\",\n  RIGHT: \"right\",\n  DOWN: \"down\",\n  TOP: \"top\"\n};\n\nwindow.init = function (event) {\n  resetKillCount();\n  shipTrack(event);\n  document.getElementById(\"startButton\").style.display = \"none\";\n  document.getElementById(\"endButton\").style.display = \"none\";\n  document.getElementById(\"gameOver\").style.display = \"none\";\n  document.getElementById(\"ship\").style.display = \"block\";\n  document.getElementById(\"main\").style.cursor = \"none\";\n  window.addEventListener(\"click\", fire, true);\n  window.addEventListener(\"mousemove\", shipTrack);\n  startGame();\n};\n\nfunction fire(event) {\n  var bullet = document.createElement(\"div\");\n  var ship = document.getElementById(\"ship\");\n  bullet.classList.add(\"bullet\");\n  bullet.classList.add(\"undraggable\");\n  document.getElementById(\"main\").appendChild(bullet);\n  bullet.style.top = \"\".concat(event.y, \"px\");\n  bullet.style.left = \"\".concat(event.x + (0, _utils.getWidth)(ship) / 2, \"px\");\n}\n\nfunction shipTrack(e) {\n  var positionX = e.clientX;\n  var positionY = e.clientY;\n  var ship = document.getElementById(\"ship\");\n  ship.style.top = \"\".concat(positionY, \"px\");\n  ship.style.left = \"\".concat(positionX, \"px\");\n}\n\nfunction startGame() {\n  if (!isGameRunning) {\n    update();\n    isGameRunning = true;\n  }\n\n  resetCurrentHp();\n  resetWeaponPower();\n  spawnIntervalId = setInterval(spawnEnemy, ENEMY_SPAWN_TIME);\n  resetIntervalId = setInterval(changeInterval, 10000);\n}\n\nfunction changeInterval() {\n  clearInterval(spawnIntervalId);\n  intervalCycle++;\n  spawnIntervalId = setInterval(spawnEnemy, ENEMY_SPAWN_TIME * 0.7 / intervalCycle);\n}\n\nfunction update() {\n  handleEnemies();\n  handleBullets();\n  handleUpgrades();\n  window.requestAnimationFrame(update);\n}\n\nfunction spawnEnemy() {\n  var enemy = document.createElement(\"div\");\n  enemy.setAttribute(\"hp\", ENEMY_HP);\n  enemy.classList.add(\"enemy\");\n  document.getElementById(\"main\").appendChild(enemy);\n  enemy.style.top = \"\".concat(getRandomInteger((0, _utils.getHeight)(enemy) / 2, window.innerHeight - (0, _utils.getHeight)(enemy) / 2), \"px\");\n  enemy.style.left = \"\".concat(window.innerWidth, \"px\");\n}\n\nfunction move(element, direction) {\n  switch (direction) {\n    case Direction.LEFT:\n      element.style.left = \"\".concat(+element.style.left.slice(0, -2) - ENEMY_SPEED, \"px\");\n      break;\n\n    case Direction.RIGHT:\n      element.style.left = \"\".concat(+element.style.left.slice(0, -2) + BULLET_SPEED, \"px\");\n      break;\n\n    case Direction.DOWN:\n      element.style.top = \"\".concat(+element.style.top.slice(0, -2) + ENEMY_SPEED, \"px\");\n      break;\n\n    case Direction.TOP:\n      element.style.top = \"\".concat(+element.style.top.slice(0, -2) - ENEMY_SPEED, \"px\");\n      break;\n  }\n}\n\nfunction handleEnemies() {\n  var enemies = Array.from(document.getElementsByClassName(\"enemy\"));\n\n  for (var _i = 0, _enemies = enemies; _i < _enemies.length; _i++) {\n    var enemy = _enemies[_i];\n    handleEnemyMove(enemy);\n\n    if (Number(enemy.style.left.slice(0, -2)) < 0) {\n      decreaseCurrentHp();\n      enemy.remove();\n\n      if (state.currentPlayerHp === 0) {\n        gameOver();\n      }\n    }\n\n    if (isShipCollision(enemy)) {\n      decreaseCurrentHp();\n      handleEnemyKill(enemy);\n\n      if (state.currentPlayerHp === 0) {\n        gameOver();\n      }\n    }\n  }\n\n  frameNumber++;\n}\n\nfunction handleEnemyMove(enemy) {\n  if (frameNumber % 2 === 0) {\n    if (!enemy.getAttribute(\"direction\")) {\n      move(enemy, Direction.LEFT);\n      enemy.setAttribute(\"direction\", Direction.LEFT);\n    } else if (frameNumber % ENEMY_DIRECTION_REPEAT === 0) {\n      var enemyYPosition = enemy.style.top.slice(0, -2);\n      var directions = [Direction.LEFT, Direction.TOP, Direction.DOWN];\n\n      if (enemyYPosition < window.innerHeight * 0.2) {\n        directions.splice(directions.indexOf(Direction.TOP), 1);\n      } else if (enemyYPosition > window.innerHeight * 0.2) {\n        directions.splice(directions.indexOf(Direction.DOWN), 1);\n      }\n\n      var direction = directions[getRandomInteger(0, directions.length - 1)];\n      move(enemy, direction);\n      enemy.setAttribute(\"direction\", direction);\n    } else {\n      move(enemy, enemy.getAttribute(\"direction\"));\n    }\n  }\n}\n\nfunction gameOver() {\n  var gameOver = document.getElementById(\"gameOver\");\n  window.removeEventListener(\"click\", fire, true);\n  document.getElementById(\"ship\").style.display = \"none\";\n  clearInterval(spawnIntervalId);\n  clearInterval(resetIntervalId);\n  gameOver.style.display = \"block\";\n  endButton.style.display = \"block\";\n  gameOver.innerText = \"Game Over!\";\n  document.getElementById(\"main\").style.cursor = \"auto\";\n  var enemies = document.getElementsByClassName(\"enemy\");\n  Array.from(enemies).forEach(function (enemy) {\n    return enemy.remove();\n  });\n  var bullets = document.getElementsByClassName(\"bullet\");\n  Array.from(bullets).forEach(function (enemy) {\n    return enemy.remove();\n  });\n  setTimeout(function () {\n    var upgrades = document.getElementsByClassName(\"upgrade\");\n    Array.from(upgrades).forEach(function (upgrade) {\n      return upgrade.remove();\n    });\n  }, 500);\n}\n\nfunction isShipCollision(enemy) {\n  var ship = document.getElementById(\"ship\");\n  var shipWidth = (0, _utils.getWidth)(ship);\n  var shipHeight = (0, _utils.getHeight)(ship);\n  var shipCoordinates = new Coordinates(+ship.style.left.slice(0, -2), +ship.style.top.slice(0, -2));\n  var enemyWidth = (0, _utils.getWidth)(enemy);\n  var enemyHeight = (0, _utils.getHeight)(enemy);\n  var enemyCoordinates = new Coordinates(+enemy.style.left.slice(0, -2), +enemy.style.top.slice(0, -2));\n\n  if (shipCoordinates.calculateHorizontalDistance(enemyCoordinates) < shipWidth / 2 && shipCoordinates.calculateVerticalDistance(enemyCoordinates) < shipHeight / 2) {\n    return true;\n  }\n\n  return false;\n}\n\nfunction handleBullets() {\n  var bullets = document.getElementsByClassName(\"bullet\");\n\n  var _iterator = _createForOfIteratorHelper(bullets),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var bullet = _step.value;\n      move(bullet, Direction.RIGHT);\n\n      if (isEnemyHit(bullet)) {\n        bullet.remove();\n      }\n\n      if (!isBulletWithinScreen(bullet)) {\n        bullet.remove();\n      }\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\n\nfunction isEnemyHit(bullet) {\n  var bulletCoordinates = new Coordinates(+bullet.style.left.slice(0, -2), +bullet.style.top.slice(0, -2));\n  var enemies = document.getElementsByClassName(\"enemy\");\n\n  var _iterator2 = _createForOfIteratorHelper(enemies),\n      _step2;\n\n  try {\n    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n      var enemy = _step2.value;\n      var enemyWidth = (0, _utils.getWidth)(enemy);\n      var enemyHeight = (0, _utils.getHeight)(enemy);\n      var enemyCoordinates = new Coordinates(+enemy.style.left.slice(0, -2), +enemy.style.top.slice(0, -2));\n\n      if (bulletCoordinates.calculateHorizontalDistance(enemyCoordinates) < enemyWidth / 2 && bulletCoordinates.calculateVerticalDistance(enemyCoordinates) < enemyHeight / 2) {\n        var currentEnemyHP = enemy.getAttribute(\"hp\");\n        currentEnemyHP -= state.weaponPower;\n        enemy.setAttribute(\"hp\", currentEnemyHP);\n\n        if (currentEnemyHP <= 0) {\n          increaseKillCount();\n          handleEnemyKill(enemy);\n        }\n\n        return true;\n      }\n    }\n  } catch (err) {\n    _iterator2.e(err);\n  } finally {\n    _iterator2.f();\n  }\n\n  return false;\n}\n\nfunction handleEnemyKill(enemy) {\n  enemy.classList.remove(\"enemy\");\n  enemy.classList.add(\"explosion\");\n  var possibility = getRandomInteger(1, 100);\n\n  if (possibility <= UPGRADE_SPAWN_CHANCE) {\n    setTimeout(function () {\n      enemy.classList.remove(\"explosion\");\n      enemy.classList.add(\"upgrade\");\n    }, 500);\n  } else {\n    setTimeout(function () {\n      return enemy.remove();\n    }, 1000);\n  }\n}\n\nfunction isWeaponUpgradePicked(upgrade) {\n  var ship = document.getElementById(\"ship\");\n  var shipWidth = (0, _utils.getWidth)(ship);\n  var shipHeight = (0, _utils.getHeight)(ship);\n  var shipCoordinates = new Coordinates(+ship.style.left.slice(0, -2), +ship.style.top.slice(0, -2));\n  var upgradeCoordinates = new Coordinates(+upgrade.style.left.slice(0, -2), +upgrade.style.top.slice(0, -2));\n\n  if (shipCoordinates.calculateHorizontalDistance(upgradeCoordinates) < shipWidth / 2 && shipCoordinates.calculateVerticalDistance(upgradeCoordinates) < shipHeight / 2) {\n    return true;\n  }\n\n  return false;\n}\n\nfunction handleUpgrades() {\n  var upgrades = document.getElementsByClassName(\"upgrade\");\n\n  var _iterator3 = _createForOfIteratorHelper(upgrades),\n      _step3;\n\n  try {\n    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n      var upgrade = _step3.value;\n\n      if (isWeaponUpgradePicked(upgrade)) {\n        increaseWeaponCount();\n        upgrade.remove();\n      }\n    }\n  } catch (err) {\n    _iterator3.e(err);\n  } finally {\n    _iterator3.f();\n  }\n}\n\nfunction increaseKillCount() {\n  document.getElementById(\"killCount\").innerText++;\n}\n\nfunction increaseWeaponCount() {\n  state.weaponPower++;\n  document.getElementById(\"weaponPowerCount\").innerText = state.weaponPower;\n}\n\nfunction resetWeaponPower() {\n  document.getElementById(\"weaponPowerCount\").innerText = 1;\n  state.weaponPower = 1;\n}\n\nfunction resetKillCount() {\n  document.getElementById(\"killCount\").innerText = 0;\n}\n\nfunction decreaseCurrentHp() {\n  state.currentPlayerHp--;\n  displayHp(state.currentPlayerHp);\n}\n\nfunction resetCurrentHp() {\n  state.currentPlayerHp = PLAYER_HP;\n  displayHp(state.currentPlayerHp);\n}\n\nfunction isBulletWithinScreen(bullet) {\n  if (+bullet.style.left.slice(0, -2) > window.innerWidth) {\n    return false;\n  }\n\n  return true;\n}\n\nfunction getRandomInteger(min, max) {\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n}\n\nfunction displayHp(value) {\n  var currentHpDiv = document.getElementById(\"currentHp\");\n  currentHpDiv.innerHTML = \"\";\n\n  for (var i = 0; i < value; i++) {\n    var ship = document.createElement(\"div\");\n    ship.classList.add(\"hpUnit\");\n    currentHpDiv.appendChild(ship);\n  }\n} // function isCollide(a, b) {\n//     return !(\n//         ((a.y + a.height) < (b.y)) ||\n//         (a.y > (b.y + b.height)) ||\n//         ((a.x + a.width) < b.x) ||\n//         (a.x > (b.x + b.width))\n//     );\n// }\n\n\nvar Coordinates = /*#__PURE__*/function () {\n  function Coordinates(x, y) {\n    _classCallCheck(this, Coordinates);\n\n    this.x = x;\n    this.y = y;\n  }\n\n  _createClass(Coordinates, [{\n    key: \"calculateVerticalDistance\",\n    value: function calculateVerticalDistance(coordinates) {\n      return Math.abs(this.y - coordinates.y);\n    }\n  }, {\n    key: \"calculateHorizontalDistance\",\n    value: function calculateHorizontalDistance(coordinates) {\n      return Math.abs(this.x - coordinates.x);\n    }\n  }], [{\n    key: \"calculateVerticalDistance\",\n    value: function calculateVerticalDistance(coordinates1, coordinates2) {\n      return Math.abs(coordinates1.y - coordinates2.y);\n    }\n  }, {\n    key: \"calculateHorizontalDistance\",\n    value: function calculateHorizontalDistance(coordinates1, coordinates2) {\n      return Math.abs(coordinates1.x - coordinates2.x);\n    }\n  }]);\n\n  return Coordinates;\n}();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getHeight = getHeight;\nexports.getWidth = getWidth;\n\nfunction getHeight(element) {\n  return Number(getComputedStyle(element).height.slice(0, -2));\n}\n\nfunction getWidth(element) {\n  return Number(getComputedStyle(element).width.slice(0, -2));\n}\n\n//# sourceURL=webpack:///./src/utils.js?");

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