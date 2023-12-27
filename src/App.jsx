import NewPlayer from "./components/NewPlayer";
import PlayersList from "./components/PlayersList";
import { PlayersStore } from "./mobX/PlayersStore";
import { observer } from "mobx-react-lite";
import "./App.css";

const App = observer(() => {
  const playersStore = new PlayersStore();
  return (
    <>
      <p className="title">Game</p>
      <NewPlayer PlayersStore={playersStore} />
      <PlayersList PlayersStore={playersStore} />
    </>
  );
});

export default App;
