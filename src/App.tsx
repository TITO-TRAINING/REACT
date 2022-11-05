import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages
import Homepage from './pages/Homepage';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
