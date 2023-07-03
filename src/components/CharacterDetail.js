import { Link } from 'react-router-dom';
import '../styles/CharacterDetail.scss';

const CharacterDetail = ({ characterData }) => {
  return (
    <>
      <Link to="/">VOLVER</Link>
      <p className="white">Detalle personaje</p>
      <div className="character__detail">
        <section className="character__section">
          <img src={characterData.image} alt="foto del personaje" />
          <h2>{characterData.name}</h2>
          <ul>
            <li>Status: {characterData.status}</li>
            <li>Species: {characterData.specie}</li>
            <li>Origin: {characterData.origin}</li>
            <li>Episodes: {characterData.episodes.length}</li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default CharacterDetail;
