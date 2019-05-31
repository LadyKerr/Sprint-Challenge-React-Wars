import React from "react";

const Character = props =>{
  return (
    <div>
      <h1>Name: {props.characters.name}</h1>
      <p>BirthYear: {props.characters.birth_year}</p>
      <p>Gender: {props.characters.gender}</p>
    </div>
  );
}

export default Character;