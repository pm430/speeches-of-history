import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  return (
    <BrowserRouter basename="/speeches-of-history">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/speech/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
