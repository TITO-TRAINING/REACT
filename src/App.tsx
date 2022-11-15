import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages

import Contact from './pages/Contact';
import About from './pages/About';
import Account from './pages/Account';
import Home from './pages/Home';
import Blog from './pages/Blog';
import DetailBlog from './pages/DetailBlog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail-blog" element={<DetailBlog />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
