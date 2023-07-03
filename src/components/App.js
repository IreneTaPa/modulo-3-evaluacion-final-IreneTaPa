import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router-dom';
import '../styles/App.scss';
import getDataFromApi from './services/api';
import CharactersList from './CharactersList';
import Filters from './Filters';
import Header from './Header';
import Footer from './Footer';
import CharacterDetail from './CharacterDetail';

const App = () => {
  //variable de estado de array vacío (de momento)
  const [charactersList, setCharactersList] = useState([]);
  //guarda el valor de los imput al cargar la pagina (string vacio)
  const [searchByName, setSearchByName] = useState('');
  const [searchBySpecie, setSearchBySpecie] = useState('');

  useEffect(() => {
    getDataFromApi().then((cleandData) => {
      setCharactersList(cleandData);
    });
  }, []);

  const filteredCharacters = charactersList
    .filter((eachCharacter) =>
      eachCharacter.name.toLowerCase().includes(searchByName.toLowerCase())
    )
    .filter((eachCharacter) =>
      eachCharacter.specie.toLowerCase().includes(searchBySpecie.toLowerCase())
    );

  //obtener la info para el detalle
  const { pathname } = useLocation();
  console.log(pathname);
  const characterRoute = matchPath('/character/:characterId', pathname);
  const characterId =
    characterRoute !== null ? characterRoute.params.characterId : '';
  console.log(characterId);

  const characterData = charactersList.find(
    (character) => character.id === parseInt(characterId)
  );
  console.log(characterData);

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section className="form">
                  <Filters
                    searchByName={searchByName}
                    searchBySpecie={searchBySpecie}
                    setSearchByName={setSearchByName}
                    setSearchBySpecie={setSearchBySpecie}
                  />
                </section>
                <section>
                  {/* le cambiamos dentro de las llaves charactersList por filteredCharacters para que nos pinte los personajes cuando escribimos en el input, si no hay nada escrito pintara TODOS los personajes*/}
                  <CharactersList charactersList={filteredCharacters} />
                </section>
              </>
            }
          ></Route>
          <Route
            path="/character/:characterId"
            element={
              <CharacterDetail characterData={characterData}></CharacterDetail>
            }
          ></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
