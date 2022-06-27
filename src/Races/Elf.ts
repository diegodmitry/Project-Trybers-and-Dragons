import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  private static _instancesCreated = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    this._instancesCreated += 1;
    return this._instancesCreated;
  }
}

export default Elf;