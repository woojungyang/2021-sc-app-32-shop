import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './store';

import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

// import './assets/css/all.min.css';
// import './assets/css/bootstrap.min.css';
import 'bootstrap/scss/bootstrap-utilities.scss';
import './assets/css/base.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
