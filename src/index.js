// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './App';
import Lista from './Componentes/Lista';
import Props from './Componentes/Props';
import State from './Componentes/State';
import LifeCycle from './Componentes/LifeCycle';
import Form from './Formularios/Form';
import CodeSplitting from './CodeSplitting/CodeSplitting';
import ReactContext from './ReactContext/Main';
import ReactContextForm from './ReactContext/Form';

render(
  <ReactContextForm />,
  document.getElementById('root')
);