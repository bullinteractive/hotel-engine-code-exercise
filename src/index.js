import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { StoreProvider } from './store/context';
import App from './App';

ReactDOM.render(
  <StoreProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StoreProvider>,
  document.getElementById('root')
);

