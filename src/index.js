import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { StoreProvider } from './store/context';
import App from './App';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <StoreProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

