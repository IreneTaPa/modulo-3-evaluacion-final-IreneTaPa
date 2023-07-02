// Fichero src/index.js (código nuevo)

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
// le decimos que vamos a usar las rutas con Browser:
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //Le indicamos que que el componente HashRouter es ahora la madre de App. Esto hará que tanto App como sus hijas, nietas, etc, puedan trabajar con rutas
  <HashRouter>
    <App />
  </HashRouter>
);
//Cuando aprendamos a trabajar con el servidor, tenemos que cambiar el codigo de arriba por este:
/*import {BrowserRouter} from 'react-router-dom';
  <BrowserRouter>
    <App />
  </BrowserRouter>*/
