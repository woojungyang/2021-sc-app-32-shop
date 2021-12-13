import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './store';

import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/scss/bootstrap-utilities.scss';
import './assets/css/base.css';
require('dotenv').config();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
