import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import useStore from './store/useStore';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Result from './ResultPage';
import Calc from './Calculate';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/result" element={<Result />} />
          <Route path="/" element={<Calc />} />
        </Routes>
      </header>
    </div>
    </Router>
  );
}

export default App;
