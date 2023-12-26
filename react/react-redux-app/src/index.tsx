import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import counter from './reducers'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = createStore(counter);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
