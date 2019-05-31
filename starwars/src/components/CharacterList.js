import React from "react";

import Character from "./Character";

const CharacterList = props => {
  return (
    <div className="character-list">
      {props.characters.map(star => (
      <Character
      characters={star}
      key={star.height}
      />
      ))}
    </div>
  );
}


export default CharacterList;