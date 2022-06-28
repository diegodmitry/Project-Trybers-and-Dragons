import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  enemy: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);

    this.enemy = player2;
  }

  fight(): number {
    const playerIsAlive = this.player.lifePoints > 0;
    const enemyIsAlive = this.enemy.lifePoints > 0;

    if (playerIsAlive && enemyIsAlive) {
      this.player.attack(this.enemy);
      this.enemy.attack(this.player);
    }

    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default PVP;