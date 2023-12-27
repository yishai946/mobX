import { makeObservable, observable, computed, action } from "mobx";

export class PlayersStore {
  players = [];
  gameStarted = false;

  constructor() {
    makeObservable(this, {
      players: observable,
      gameStarted: observable,
      addPlayer: action,
      removePlayer: action,
      startGame: action,
      playersCount: computed,
    });
  }

  addPlayer(player) {
    this.players = [...this.players, player];
  }

  removePlayer(id) {
    this.players = this.players.filter((player) => player.id !== id);
  }

  get playersCount() {
    return this.players.length;
  }

  startGame() {
    this.gameStarted = true;
  }
}
