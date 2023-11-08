// src/Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;