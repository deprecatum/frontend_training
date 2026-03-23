import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Homepage } from './page/homepage/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>
);
