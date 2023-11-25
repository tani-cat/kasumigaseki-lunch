import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';

import { PageHome } from './components/page-home';
import { PageResult } from './components/page-result';
import { PageList } from './components/page-list';
import { PageUpdate } from './components/page-update';
import { Page404 } from './components/404';
import { ScrollTop } from './components/utils/util-scroll';

import District from "./data/district.json";
import Genre from "./data/genre.json";


export const App = () => {
  const [result, setResult] = useState("");
  const [districts, setDistricts] = useState(Object.keys(District).reduce((res, key) => {
    res[key] = true;
    return res;
  }, {}));
  const [genres, setGenres] = useState(Object.keys(Genre).reduce((res, key) => {
    res[key] = true;
    return res;
  }, {}));

  const [includeChain, setIncludeChain] = useState(true);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollTop />
      <Container className="p-4 col-md-8 col-lg-6 text-center">
        <Routes>
          <Route path="/" element={
            <PageHome
              setResult={setResult}
              districts={districts}
              setDistricts={setDistricts}
              genres={genres}
              setGenres={setGenres}
              includeChain={includeChain}
              setIncludeChain={setIncludeChain}
            />
          } />
          <Route path="/result" element={result ? <PageResult result={result} /> : <Navigate to="/" />} />
          <Route path="/list" element={<PageList />} />
          <Route path="/update" element={<PageUpdate />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <br />
        <div>本郷ランチ ver. {process.env.REACT_APP_VERSION}</div>
      </Container>
    </BrowserRouter >
  );
}
