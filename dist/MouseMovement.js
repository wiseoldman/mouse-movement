'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function MouseMovement() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;

    _classCallCheck(this, MouseMovement);

    this.mousemoveCallback;
    this.mouseoutCallback;
    this.diagonalThreshold;
    this.element;

    this.diagonal = false;
    this.directionX = 'none';
    this.directionY = 'none';
    this.selector = selector;
    this.oldX = 0;
    this.oldY = 0;
    this.speedX = 0;
    this.speedY = 0;
    this.skipCalculation = true;
    this.ticking = false;
    this.windowOrDocument = false;

    this.mouseLeave = this.mouseLeave.bind(this);
    this.resetSkipCalculation = this.resetSkipCalculation.bind(this);
    this.fetchCoordinates = this.fetchCoordinates.bind(this);
  }

  _createClass(MouseMovement, [{
    key: 'init',
    value: function init() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$mousemoveCallbac = _ref.mousemoveCallback,
          mousemoveCallback = _ref$mousemoveCallbac === undefined ? function () {
        console.error('No callback function');
      } : _ref$mousemoveCallbac,
          _ref$mouseoutCallback = _ref.mouseoutCallback,
          mouseoutCallback = _ref$mouseoutCallback === undefined ? function () {} : _ref$mouseoutCallback,
          _ref$diagonalThreshol = _ref.diagonalThreshold,
          diagonalThreshold = _ref$diagonalThreshol === undefined ? 4 : _ref$diagonalThreshol;

      var SELECTOR_IS_WINDOW = this.selector === window || this.selector === 'window';
      var SELECTOR_IS_DOCUMENT = this.selector === document || this.selector === 'document';
      this.windowOrDocument = SELECTOR_IS_WINDOW || SELECTOR_IS_DOCUMENT;

      this.mousemoveCallback = mousemoveCallback;
      this.mouseoutCallback = mouseoutCallback;
      this.diagonalThreshold = diagonalThreshold;

      if (SELECTOR_IS_WINDOW) {
        this.element = window;
      } else if (SELECTOR_IS_DOCUMENT) {
        this.element = document;
      } else {
        this.element = document.querySelectorAll(this.selector);
      }

      if (this.windowOrDocument) {
        this.element.addEventListener('mousemove', this.fetchCoordinates);
        this.element.addEventListener('mouseleave', this.mouseLeave);
      } else {
        for (var i = 0; i < this.element.length; i++) {
          this.element[i].addEventListener('mousemove', this.fetchCoordinates);
          this.element[i].addEventListener('mouseleave', this.mouseLeave);
        }
      }
    }
  }, {
    key: 'fetchCoordinates',
    value: function fetchCoordinates(e) {
      var _this = this;

      if (!this.ticking) {
        requestAnimationFrame(function () {
          _this.movementHandler(e.x, e.y);
          _this.ticking = false;
        });
        this.ticking = true;
      }
    }
  }, {
    key: 'movementHandler',
    value: function movementHandler(mouseX, mouseY) {
      if (this.skipCalculation) {
        this.oldX = mouseX;
        this.oldY = mouseY;
        this.skipCalculation = false;
      } else {
        var SPEED_X = mouseX - this.oldX;
        var SPEED_Y = mouseY - this.oldY;

        this.directionX = SPEED_X < 0 ? 'left' : SPEED_X > 0 ? 'right' : 'none';
        this.directionY = SPEED_Y < 0 ? 'up' : SPEED_Y > 0 ? 'down' : 'none';
        this.speedX = Math.abs(SPEED_X);
        this.speedY = Math.abs(SPEED_Y);
        this.diagonal = this.speedX > this.diagonalThreshold && this.speedY > this.diagonalThreshold;
        this.oldX = mouseX;
        this.oldY = mouseY;
        this.mousemoveCallback();
      }
    }
  }, {
    key: 'resetSkipCalculation',
    value: function resetSkipCalculation() {
      this.skipCalculation = true;
    }
  }, {
    key: 'mouseLeave',
    value: function mouseLeave() {
      this.skipCalculation = true;

      if (typeof this.mouseoutCallback === 'function') {
        this.mouseoutCallback();
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      if (this.windowOrDocument) {
        this.element.removeEventListener('mousemove', this.fetchCoordinates);
        this.element.removeEventListener('mouseleave', this.mouseLeave);
      } else {
        for (var i = 0; i < this.element.length; i++) {
          this.element[i].removeEventListener('mousemove', this.fetchCoordinates);
          this.element[i].removeEventListener('mouseleave', this.mouseLeave);
        }
      }
    }
  }]);

  return MouseMovement;
}();