import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import CreateStore from './Store';
import { Provider } from "react-redux"

import { loadRecipes } from './actions/recipes';

const store = CreateStore();
store.dispatch(loadRecipes());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
