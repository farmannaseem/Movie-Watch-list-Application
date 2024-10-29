// App.js (or index.js)

import React from 'react';
import createRoot from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'; // Ensure you have configured and exported your Redux store correctly
import App from './App';

createRoot.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

