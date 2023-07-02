//le pasamos el array de objetos para que lo pinte. Solo hace el map

import CharacterCard from './CharacterCard';

const CharactersList = ({ charactersList }) => {
  console.log(charactersList);
  const charactersLi = charactersList.map((eachCharacter) => (
    <li key={eachCharacter.id} className="characters">
      <CharacterCard eachCharacter={eachCharacter} />
    </li>
  ));

  return <ul className="characters__list">{charactersLi}</ul>;
};

export default CharactersList;
