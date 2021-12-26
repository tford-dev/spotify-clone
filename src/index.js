import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateProvider} from "./ContextApi/StateProvider";
import {initialState} from "./ContextApi/reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={null}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


