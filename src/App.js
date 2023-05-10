import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import { PageHome } from './components/page-home';
import { PageResult } from './components/page-result';
import { PageList } from './components/page-list';
import { PageUpdate } from './components/page-update';
import { ScrollTop } from './components/util-scroll';


export const App = () => {
  const [result, setResult] = useState("");

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollTop />
      <Container className="p-4 col-md-8 col-lg-6 text-center">
        <Routes>
          <Route path="/" element={<PageHome setResult={setResult} />} />
          <Route path="/result" element={result ? <PageResult result={result} /> : <PageHome setResult={setResult} />} />
          <Route path="/list" element={<PageList />} />
          <Route path="/update" element={<PageUpdate />} />
        </Routes>
        <br />
        <div>本郷ランチ ver. {process.env.REACT_APP_VERSION}</div>
      </Container>
    </BrowserRouter >
  );
}
