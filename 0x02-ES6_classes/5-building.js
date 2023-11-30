/* eslint-disable no-underscore-dangle */
export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new Error('sqrt must be a number');
    }
    this._sqft = sqft;

    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqrt(sqrt) {
    this._sqft = sqrt;
  }
}
