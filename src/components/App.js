import { useEffect, useState } from 'react';
import '../styles/App.scss';
import getDataFromApi from './services/api';
import ContactList from './CharactersList';

const App = () => {
  //variable de estado de array vacío (de momento)
  const [charactersList, setCharactersList] = useState([]);

  useEffect(() => {
    getDataFromApi().then((cleandData) => {
      setCharactersList(cleandData);
    });
  }, []);

  return (
    <div>
      <header>
        <h1>RICK AND MORTY</h1>
      </header>
      <main>
        <section>
          <form>
            <label htmlFor=""></label>
            <input type="text" />
          </form>
        </section>
        <section>
          <ContactList charactersList={charactersList} />
        </section>
      </main>
    </div>
  );
};

export default App;
