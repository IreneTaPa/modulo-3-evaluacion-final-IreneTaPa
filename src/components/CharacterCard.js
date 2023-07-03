import { Link } from 'react-router-dom';

//Pinta el contenido de cada <li>

const CharacterCard = ({ eachCharacter }) => {
  return (
    <div className="background">
      <Link to={'./character/' + eachCharacter.id}>
        <img
          className="character__img"
          src={eachCharacter.image}
          alt={`Foto de ${eachCharacter.name}`}
        />
        <h4 className="character__name">{eachCharacter.name}</h4>
        <p className="character__text">{eachCharacter.specie}</p>
      </Link>
    </div>
  );
};

export default CharacterCard;
