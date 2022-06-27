import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private static _instancesCreated = 0;
  private _energyType: EnergyType = 'mana';

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    this._instancesCreated += 1;
    return this._instancesCreated;
  }
}

export default Mage;