import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import store, { persistor } from './store';

import setupAxios from './store/setupAxios';
import App from './App';

import 'font-awesome/scss/font-awesome.scss';
import './style.scss';

setupAxios(axios, store);

const { PUBLIC_URL } = process.env;

ReactDOM.render(
  <App store={store} persistor={persistor} basename={PUBLIC_URL} />,
  document.getElementById('root') as HTMLElement,
);
