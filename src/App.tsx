import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import Contact from './pages/Contact';
// import DetailBlogPage from './pages/DetailBlogPage';

// pages
import Homepage from './pages/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/BlogPage" element={<BlogPage />} />
        {/* <Route path="/DetailBlogPage" element={<DetailBlogPage />} /> */}
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
