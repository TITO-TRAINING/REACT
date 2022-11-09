import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blogpage from './pages/Blogpage';

// pages
import Homepage from './pages/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Blogpage" element={<Blogpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
