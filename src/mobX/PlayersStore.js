import { makeObservable, observable, computed, action } from "mobx";

export class PlayersStore {
  players = [];

  constructor() {
    makeObservable(this, {
      players: observable,
      addPlayer: action,
      removePlayer: action,
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
}
