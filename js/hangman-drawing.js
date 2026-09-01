/**
 * hangman-drawing.js - Lógica SVG del ahorcado
 * Cada parte del cuerpo se revela progresivamente con cada error
 */
const HangmanDrawing = {
  maxWrong: 6,

  init(svgElement) {
    this.svg = svgElement;
    this.parts = {
      head: svgElement.querySelector('#head'),
      body: svgElement.querySelector('#body'),
      leftArm: svgElement.querySelector('#left-arm'),
      rightArm: svgElement.querySelector('#right-arm'),
      leftLeg: svgElement.querySelector('#left-leg'),
      rightLeg: svgElement.querySelector('#right-leg')
    };
    this.order = ['head', 'body', 'leftArm', 'rightArm', 'leftLeg', 'rightLeg'];
    this.currentPart = 0;
    this.hideAll();
  },

  hideAll() {
    Object.values(this.parts).forEach(part => {
      if (part) {
        part.classList.remove('part--visible');
      }
    });
    this.currentPart = 0;
  },

  showNextPart() {
    if (this.currentPart < this.order.length) {
      const partName = this.order[this.currentPart];
      const part = this.parts[partName];
      if (part) {
        part.classList.add('part--visible');
      }
      this.currentPart++;
      return true;
    }
    return false;
  },

  getWrongCount() {
    return this.currentPart;
  },

  reset() {
    this.hideAll();
  }
};
