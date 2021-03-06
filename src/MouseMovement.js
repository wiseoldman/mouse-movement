module.exports = class MouseMovement {
  constructor (selector = window) {
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
    this.fetchCoordinates = this.fetchCoordinates.bind(this);
  }

  init ({mousemoveCallback = () => {console.error('No callback function')}, mouseoutCallback = () => {}, diagonalThreshold = 4} = {}) {
    const SELECTOR_IS_WINDOW = this.selector === window || this.selector === 'window';
    const SELECTOR_IS_DOCUMENT = this.selector === document || this.selector === 'document';
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
      for (let i = 0; i < this.element.length; i++) {
        this.element[i].addEventListener('mousemove', this.fetchCoordinates);
        this.element[i].addEventListener('mouseleave', this.mouseLeave);
      }
    }
  }

  fetchCoordinates (e) {
    if (!this.ticking) {
      requestAnimationFrame(() => {
        this.movementHandler(e.x, e.y);
        this.ticking = false;
      });
      this.ticking = true;
    }
  }

  movementHandler (mouseX, mouseY) {
    if (this.skipCalculation) {
      this.oldX = mouseX;
      this.oldY = mouseY;
      this.skipCalculation = false;
    } else {
      const SPEED_X = mouseX - this.oldX;
      const SPEED_Y = mouseY - this.oldY;

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

  mouseLeave() {
    this.skipCalculation = true;

    if (typeof this.mouseoutCallback === 'function') {
      this.mouseoutCallback();
    }
  }

  destroy() {
    if (this.windowOrDocument) {
      this.element.removeEventListener('mousemove', this.fetchCoordinates);
      this.element.removeEventListener('mouseleave', this.mouseLeave);
    } else {
      for (let i = 0; i < this.element.length; i++) {
        this.element[i].removeEventListener('mousemove', this.fetchCoordinates);
        this.element[i].removeEventListener('mouseleave', this.mouseLeave);
      }
    }
  }
}