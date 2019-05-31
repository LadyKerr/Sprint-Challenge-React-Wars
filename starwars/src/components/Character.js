import React from "react";

const Character = props =>{
  return (
    <div className="character">
      <h1>{props.characters.name}</h1>
      <p>BirthYear: {props.characters.birth_year}</p>
      <p>Gender: {props.characters.gender}</p>
      <p>Mass: {props.characters.mass}</p>
    </div>
  );
}

export default Character;