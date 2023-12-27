import { useState } from "react";
import { BigHead } from "@bigheads/core";
import { observer } from "mobx-react-lite";
import { getRandomBighead } from "../../bighead";
import "../styles/NewPlayer.css";

export default observer(({ PlayersStore }) => {
  const [bighead, setBighead] = useState(getRandomBighead());
  const [name, setName] = useState("");

  const newBighead = () => {
    setBighead(getRandomBighead());
  };

  const addPlayer = () => {
    if (name === "") return alert("Please enter a name");

    PlayersStore.addPlayer({
      id: PlayersStore.players.length + 1,
      name: name,
      points: 0,
      bighead: { ...bighead }, 
    });

    setName("");
    newBighead(); 
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {bighead && (
        <BigHead
          accessory={bighead.accessory}
          body={bighead.body}
          circleColor={bighead.circleColor}
          clothing={bighead.clothing}
          clothingColor={bighead.clothingColor}
          eyebrows={bighead.eyebrows}
          eyes={bighead.eyes}
          facialHair={bighead.facialHair}
          graphic={bighead.graphic}
          hair={bighead.hair}
          hairColor={bighead.hairColor}
          hat={bighead.hat}
          hatColor={bighead.hatColor}
          lashes={bighead.lashes}
          lipColor={bighead.lipColor}
          mask={bighead.mask}
          mouth={bighead.mouth}
          skinTone={bighead.skinTone}
          style={{
            width: "200px",
            height: "200px",
          }}
        />
      )}
      {/* input name */}
      <input
        placeholder="Name"
        className="input"
        type="text"
        value={name}
        onChange={(e) => {
          e.preventDefault();
          setName(e.target.value);
        }}
      />

      <button onClick={newBighead}>New Bighead</button>
      <button onClick={addPlayer}>Save</button>
    </div>
  );
});
