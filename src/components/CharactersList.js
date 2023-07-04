//le pasamos el array de objetos para que lo pinte. Solo hace el map

import CharacterCard from './CharacterCard';
import '../styles/layout/CharactersList.scss';
const CharactersList = ({ charactersList }) => {
  console.log(charactersList);
  const charactersLi = charactersList.map((eachCharacter) => (
    <li key={eachCharacter.id} className="characters">
      <CharacterCard eachCharacter={eachCharacter} />
    </li>
  ));
  if (charactersLi.length === 0) {
    return (
      <h3 className="error__text">¡VAYA! Ese personaje/especie no existe </h3>
    );
  } else {
    return <ul className="characters__list">{charactersLi}</ul>;
  }
};

export default CharactersList;
