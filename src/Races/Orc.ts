import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number = 74;
  private static _instancesCreated = 0;
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  static createdRacesInstances(): number {
  this._instancesCreated += 1;
    return this._instancesCreated;
  }
}

export default Orc;