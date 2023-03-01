import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import { PageHome } from './components/page-home';
import { PageResult } from './components/page-result';

export const App = () => {
  return (
    <BrowserRouter>
      <Container className="p-4 text-center">
        <h2 className="mb-3"><Link to="/" className="text-reset text-decoration-none">本郷ランチ</Link></h2>
        <Routes>
          <Route exact path="/" element={<PageHome />} />
          <Route path="/result" element={<PageResult />} />
        </Routes>
      </Container>
    </BrowserRouter >
  );
}
