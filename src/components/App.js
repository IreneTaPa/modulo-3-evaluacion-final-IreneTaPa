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
import NotFound from './NotFound';

const App = () => {
  const [charactersList, setCharactersList] = useState([]);
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

  const { pathname } = useLocation();
  console.log(pathname);
  const characterRoute = matchPath('/character/:characterId', pathname);
  const characterId =
    characterRoute !== null ? characterRoute.params.characterId : '';

  const characterData = charactersList.find(
    (character) => character.id === parseInt(characterId)
  );

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
                  <CharactersList charactersList={filteredCharacters} />
                </section>
              </>
            }
          ></Route>
          <Route
            path="/character/:characterId"
            element={<CharacterDetail characterData={characterData} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
