import { useEffect, useState } from 'react';
import '../styles/App.scss';
import getDataFromApi from './services/api';

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
      <header></header>
      <main>
        <form>
          <label htmlFor=""></label>
          <input type="text" />
        </form>
        <ul></ul>
      </main>
    </div>
  );
};

export default App;
