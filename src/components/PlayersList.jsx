import React from "react";
import { observer } from "mobx-react-lite";
import { BigHead } from "@bigheads/core";
import "../styles/PlayersList.css";

const PlayersList = observer(({ PlayersStore }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {(PlayersStore.players.length < 2 || PlayersStore.players.length > 5) && <p className="subTitle">Enter 2-5 players</p>}
      <div className="list">
        {PlayersStore.players.map((player) => (
          <div key={player.id} className="player">
            <BigHead
              {...player.bighead}
              style={{
                width: "200px",
                height: "200px",
              }}
            />
            <p className="name">{player.name}</p>
            <button onClick={() => PlayersStore.removePlayer(player.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      {PlayersStore.players.length >= 2 && PlayersStore.players.length < 5 && (
        <button onClick={() => PlayersStore.startGame()}>Start Game</button>
      )}
    </div>
  );
});

export default PlayersList;
