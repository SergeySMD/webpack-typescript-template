import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';

import './i18next';
import { setupStore } from './store/store';
import Loader from './components/loader/Loader';

const App = lazy(() => import(/* webpackChunkName: "app-context" */ './App'));
const store = setupStore();

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </Provider>
  </Router>,
  document.getElementById('root')
);
