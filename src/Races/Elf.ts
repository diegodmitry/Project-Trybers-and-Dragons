import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number = 99;
  private static _instancesCreated = 0;
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  static createdRacesInstances(): number {
    this._instancesCreated += 1;
    return this._instancesCreated;
  }
}

export default Elf;