import React from 'react';
import ReactDOM from 'react-dom/client';

import { AppWithProviders } from '.';
import 'normalize.css/normalize.css';
import 'app/styles/index.scss';

window._env = Object.assign(import.meta.env, window._env);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWithProviders />
  </React.StrictMode>,
);
