import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number = 60;
  private static _instancesCreated = 0;
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  static createdRacesInstances(): number {
    this._instancesCreated += 1;
    return this._instancesCreated;
  }
}

export default Halfling;