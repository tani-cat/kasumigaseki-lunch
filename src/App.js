import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import { PageHome } from './components/page-home';
import { PageResult } from './components/page-result';
import { PageUpdate } from './components/page-update';
import { ScrollTop } from './components/util-scroll';

const Title = React.memo(() => {
  return <h2 className="mb-3">本郷ランチ</h2>;
})

export const App = () => {
  const [result, setResult] = useState("");

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollTop />
      <Container className="p-4 col-md-8 col-lg-6 text-center">
        <Title />
        <Routes>
          <Route path="/" element={<PageHome setResult={setResult} />} />
          <Route path="/result" element={result ? <PageResult result={result} /> : <PageHome setResult={setResult} />} />
          <Route path="/update" element={<PageUpdate />} />
        </Routes>
      </Container>
    </BrowserRouter >
  );
}
