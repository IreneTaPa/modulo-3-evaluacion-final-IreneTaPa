import CharacterCard from './CharacterCard';
import '../styles/layout/CharactersList.scss';
const CharactersList = ({ charactersList }) => {
  console.log(charactersList);
  const charactersItems = charactersList.map((eachCharacter) => (
    <li key={eachCharacter.id} className="characters">
      <CharacterCard eachCharacter={eachCharacter} />
    </li>
  ));

  return !charactersItems || !charactersItems.length ? (
    <p className="error__text">¡VAYA! Ese personaje/especie no existe</p>
  ) : (
    <ul className="characters__list">{charactersItems}</ul>
  );
};

export default CharactersList;
