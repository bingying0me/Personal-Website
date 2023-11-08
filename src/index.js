// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>,
  document.getElementById('root')
);
