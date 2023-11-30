/* eslint-disable no-underscore-dangle */
export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new Error('sqrt must be a number');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
