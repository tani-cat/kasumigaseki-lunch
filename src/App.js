import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { PageHome } from './components/page-home';
import { PageResult } from './components/page-result';

const Title = React.memo(() => {
  return <h2 className="mb-3">本郷ランチ</h2>;
})

export const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Container className="p-4 col-md-8 col-lg-6 text-center">
        <Title />
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/result" element={<PageResult />} />
        </Routes>
      </Container>
    </BrowserRouter >
  );
}
