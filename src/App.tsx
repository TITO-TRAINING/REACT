import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages
import Homepage from './pages/Homepage';
import DetailBlogPage from './pages/Detailblogpage';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/detail-blog" element={<DetailBlogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
