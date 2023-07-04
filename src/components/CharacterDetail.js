import { Link } from 'react-router-dom';
import '../styles/layout/CharacterDetail.scss';

const CharacterDetail = ({ characterData }) => {
  return (
    <>
      <div className="character__box">
        <Link className="link" to="/">
          <button className="back__btn">VOLVER</button>
        </Link>
        <section className="character__section">
          <img src={characterData.image} alt="foto del personaje" />
          <h2>{characterData.name}</h2>
          <p className="box__text">Status: {characterData.status}</p>
          <p className="box__text">Species: {characterData.specie}</p>
          <p className="box__text">Origin: {characterData.origin}</p>
          <p className="box__text">Episodes: {characterData.episodes.length}</p>
        </section>
      </div>
    </>
  );
};

export default CharacterDetail;
