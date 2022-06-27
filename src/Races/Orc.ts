import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static _instancesCreated = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    this._instancesCreated += 1;
    return this._instancesCreated;
  }
}

export default Orc;