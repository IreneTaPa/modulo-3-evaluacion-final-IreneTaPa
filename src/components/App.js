import { useEffect, useState } from 'react';
import '../styles/App.scss';
import getDataFromApi from './services/api';
import ContactList from './CharactersList';
import Filters from './Filters';

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

  return (
    <div>
      <header>
        <h1>RICK AND MORTY</h1>
      </header>
      <main>
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
          <ContactList charactersList={filteredCharacters} />
        </section>
      </main>
    </div>
  );
};

export default App;
