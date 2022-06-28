import Fighter, { SimpleFighter } from "../Fighter";
import Character from '../Character';
import Battle from "./Battle";

class PVE extends Battle {
  enemy: (SimpleFighter | Fighter)[];
  
  constructor(player1: Fighter | Character, enemy: (SimpleFighter | Fighter)[]) {
    super(player1);
    this.enemy = enemy;
  }

  fight(): number {
    const playerIsAlive = this.player.lifePoints > 0;
    // const enemyIsAlive = this.enemy.lifePoints > 0;
    const enemyIsAlive = this.enemy.every((character) => character.lifePoints > 0);

    if (playerIsAlive && enemyIsAlive) {
      // this.player.attack(this.enemy);
      // this.player.attack(this.enemy.forEach((enemy) => this.enemy));

      // this.enemy.attack(this.player);
      // this.enemy.forEach((npc) => {
      //   this.player.attack(npc);
      //   npc.attack(this.player);
      // })
      this.player.attack(this.enemy[0])
    }

    // return this.player.lifePoints === -1 ? -1 : 1;
    // this.player.lifePoints
    return super.fight();
  }
}

export default PVE;