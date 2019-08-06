import React from 'react';

const CharacterDetail = ({character}) => {
  if (!character) return null;
  return (
    <div className="character-detail">
    <h2> Character Name: {character.name}</h2>
    <p> House: {character.house}</p>
    <p> Wand - Wood: {character.wand.wood}</p>
    <img src={character.image}/>
    </div>
  )
}

export default CharacterDetail;
