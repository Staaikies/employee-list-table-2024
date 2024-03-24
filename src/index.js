import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import './css/style.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
      <App />
  </StrictMode>
);