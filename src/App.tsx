import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages
import Homepage from './pages/Homepage';
import BlogPage from './pages/BlogPage';
import Contact from './pages/Contact';
import DetailBlogPage from './pages/Detailblogpage';
import About from './pages/About';
import Account from './pages/Account';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail-blog" element={<DetailBlogPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
