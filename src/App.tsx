import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages
import Homepage from './pages/Homepage';
import BlogPage from './pages/BlogPage';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
